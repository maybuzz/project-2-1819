# Maribeau

## Summary
Meeting room dashboard application for the Maribeau `smart office` in Amsterdam.

![vergaderruimtes](/img/final.png)

## Table of contents
- [Live demo](#Live-demo)
- [Install](#Install)
- [Concept](#Concept)
  - [Requirements](#Requirements)
- [Performance](#Performance)
- [Progressive enhancements](#Progressive-enhancements)
- [To-do](#To-do)
- [Resources](#Resources)

## Live demo
[Click here](https://mirarooms.herokuapp.com/) to see my live demo.

## Install
To install this project you'll have to fork this repository and open your terminal
```bash
  # insert your username to this link
  # put this in your terminal to clone the repo
  git clone https://github.com/your-user-name/project-2-1819/

  # run the following code to build the app
  npm start
```

## Concept
A meeting room dashboard application for the Maribeau office in Amsterdam. The dashboard shows several measurements done by sensors placed in the meeting rooms. It shows the availability, temperature, humidity-, co2- and barometric pressure in the room.

The idea of this app is that employees of the Maribeau office can easily see what rooms are available and what the environment in the rooms is like. The values are shown in bars that change color when the levels raise to high. When the levels raise too high employees in the rooms will be warned.  

### Requirements
The application should be able to...
- be viewed in an optimal manner in all modern browsers (including IE11)
- be accessible for a wide range of people (e.g. people using screen-readers)
- run without JS
- provide the user with useful information if the internet connection is (temporarily) lost
- leverage techniques to reduce the time to interactive
- leverage techniques improve perceived performance
- leverage techniques to progressively enhance the user experience through JS and CSS

## Progressive enhancements
Progressive enhancements are used to enhance the user experience of the app. There is a lot more I wanted to do (such as change the colors of the bars according to the value and notify users when levels raise to high) but due too a lack of time I did not do those things -yet-.

My point with this simple design is that users can see everything in one look. They can see how many rooms there are, as shown below. This shows users how many, of the total rooms, are available.

![header](/img/availablerooms.png)

I also used this design to give the users usable feedback about the rooms. Available rooms are placed at the top. Occupied rooms are placed below. The rooms are labeled according to occupancy. Available rooms are labeled `available` in green, occupied rooms are labeled `occupied` in red. Rooms can also be booked, these will be labeled `booked` in orange and will be placed among the available rooms. In the final version,, the booking of rooms will change the order of the rooms and will be legit.

![audits before sw](/img/rooms.png)

## Performance
The performance of an app or website is very important. I used a couple different techniques to add to the performance. For example, I installed a `service worker` so files can be served offline and pages will be cached. This application is so small, it's hard to perfect the performance.

The images below show the audits I did in my Chrome browser. The first is before I implemented the service worker, the second one is after. As you can see the service worker improved the `PWA` and `Accessibility`. Before the service worker I already implemented `compression`, `gulp` and `critical css`.

![audits before sw](/img/audits-bfor-sw.png)
![audits after sw](/img/audits-after-sw.png)

The final image show the rendering of the different files. Because the app is so small it only takes a few seconds to render everything. Still, the `critical css` and `font-display: swap` make sure styling is shown before the rendering is done.

![network](/img/network-final.png)

## To-do
- [x] Nodejs, express server
- [x] Runs without JS
- [x] Responsive design
- [x] Filter rooms, different sections
- [x] Server
  - [x] Serve time, `noscript` tag
  - [x] Change bars width according to data
- [x] Client
  - [x] Book rooms, `localStorage`
  - [x] Realtime clock
- [x] Performance
  - [x] Service worker and cache control
  - [x] Offline page
  - [x] Perceived performance
  - [x] Critical css
- [ ] Progressive enhancements
  - [ ] Change color span according to value
  - [ ] Update data without refresh
  - [ ] Notification when levels raise to high


## Resources
- [Current dashboard at Maribeau office](https://blog.mirabeau.nl/nl/articles/a_smart_meeting_room_dashboard_in_airport_style/ytBXX0WaCkmokgS6ScSOI)
- [Maribeau documentation](https://bitbucket.org/davebitter/mirabeau-smart-office/src/master/)
- [Maribeau api, brought to you by Dennisdemennis](http://mirabeau.denniswegereef.nl/api/v1/rooms)
- [`Request` documentation](https://github.com/request/request)

## License
[MIT](LICENSE) © [Luna May Johansson](https://github.com/maybuzz)
