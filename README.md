# Maribeau

## Summary
Meeting room dashboard application for the Maribeau `smart office` in Amsterdam.

![vergaderruimtes](/img/vergaderruimtes.png)

## Table of contents
- [Live demo](#Live-demo)
- [Install](#Install)
- [Concept](#Concept)
  - [Requirements](#Requirements)
- [To-do](#To-do)
- [Resources](#Resources)

## Live demo
[Click here](...) to see my live demo.

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
- [ ] be viewed in an optimal manner in all modern browsers (including IE11)
- [x] be accessible for a wide range of people (e.g. people using screen-readers)
- [x] run without JS
- [ ] provide the user with useful information if the internet connection is (temporarily) lost
- [ ] leverage techniques to reduce the time to interactive
- [ ] leverage techniques improve perceived performance
- [ ] leverage techniques to progressively enhance the user experience through JS and CSS


## To-do
- [x] Nodejs, express server
- [x] Responsive design
- [x] Filter rooms, different sections
- [ ] Server
  - [x] Serve time, `noscript` tag
  - [x] Change bars width according to data
- [x] Client
  - [x] Book rooms, `localStorage`
  - [x] Realtime clock
- [ ] Progressive enhancements
  - [ ] Change color span according to value
  - [ ] Update data without refresh
  - [ ] Notification when level raise to high
  - [ ] Inform users about the environmental conditions (how they effect each other etc.)
- [ ] Performance
  - [ ] Perceived performance
  - [ ] Critical css


## Resources
- [Current dashboard at Maribeau office](https://blog.mirabeau.nl/nl/articles/a_smart_meeting_room_dashboard_in_airport_style/ytBXX0WaCkmokgS6ScSOI)
- [Maribeau documentation](https://bitbucket.org/davebitter/mirabeau-smart-office/src/master/)
- [Maribeau api, brought to you by Dennisdemennis](http://mirabeau.denniswegereef.nl/api/v1/rooms)
- [`Request` documentation](https://github.com/request/request)

## License
[MIT](LICENSE) © [Luna May Johansson](https://github.com/maybuzz)
