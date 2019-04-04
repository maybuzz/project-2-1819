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
  .use((req, res, next) => { res.setHeader('Cache-Control', 'max-age=' + 365 * 24 * 60 * 60);  next() })
  .use(express.static(path.join(__dirname, 'static')))
  .set('view engine', 'ejs')
  .set('views', path.join(__dirname, 'views'))
  .get('/', index)
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

    // console.log("data: ", takenRooms)

    // temp: 100% = 40 0% = 0 40:100xvalue
    // humidity: 100% = 100 0% = 0 100:100xvalue : check
    // co2: 100% = 2000 0% = 0 2000:100xvalue + if 2000 of meer dan = 100% + melding

    let barsData = goodData.map(room => (
      {
        temp: room.temp/40*100,
        humidity: room.humidity,
        co2: room.co2/2000*100
      }
    ))

    console.log("data: ", goodData)

    res.render('main.ejs', {
      free: freeRooms,
      taken: takenRooms,
      bars: barsData,
      data: data,
      date: date
    })
  }
}

function fallback(req, res, err) {
	res.render('error.ejs', {
		error: "Deze pagina lijkt (nog) niet niet te bestaan"
	})
}
