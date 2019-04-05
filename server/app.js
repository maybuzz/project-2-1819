'use strict'

const fs = require('fs')
const ejs = require('ejs')
const path = require('path')
const express = require('express')
const request = require('request')
const compression = require('compression')
const app = express()

app
  .use(compression())
  .use(express.static(path.join(__dirname, 'static')))
  .use((req, res, next) => { res.setHeader('Cache-Control', 'max-age=' + 365 * 24 * 60 * 60);  next() })
  .set('view engine', 'ejs')
  .set('views', path.join(__dirname, 'views'))
  .get('/', index)
  .get('/offline', offline)
  .get('*', fallback)
  .listen(process.env.PORT || 3000)

function index(req, res, err) {
  request({
      url: 'http://mirabeau.denniswegereef.nl/api/v1/rooms',
      headers: {
        'User-Agent': 'request'
      }
    }, callback)

  function callback(error, result, body){
    let data = JSON.parse(body).data

    let date = new Date().toLocaleTimeString()

    let goodData = data.map(room => (
      {
        name: room.room_name,
        temp: parseFloat(Math.floor(room.measurements.temperature/100)/10).toFixed(1),
        co2: room.measurements.co2,
        humidity: parseFloat(Math.round(room.measurements.humidity/100)/10).toFixed(1),
        pressure: room.measurements.bapLevel,
        occupied: room.measurements.occupancy,
        tempCalc: ((parseFloat(Math.floor(room.measurements.temperature/100)/10) / 40 )* 100).toFixed(1),
        co2Calc: room.measurements.co2/2000*100
      }
    ))

    const freeRooms = goodData.filter(room => {
      return room.occupied === false
    })

    const takenRooms = goodData.filter(room => {
      return room.occupied === true
    }).reverse()

    console.log("data: ", takenRooms)

    res.render('main.ejs', {
      free: freeRooms,
      taken: takenRooms,
      data: data,
      date: date
    })
  }
}

function offline(req, res, err) {
  res.render('offline.ejs', {
		offline: "We were unable to connect to the internet... Please try again later."
	})
}

function fallback(req, res, err) {
	res.render('error.ejs', {
		error: "Error 404 - Page not found"
	})
}
