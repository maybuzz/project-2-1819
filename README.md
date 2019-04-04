# Maribeau

## Summary
Part 2 of the "oba for dummies" app. Adding performance and other fixes.

![vergaderruimtes](/img/vergaderruimtes.png)

## Table of contents
- [Live demo](#Live-demo)
- [Install](#Install)
- [Concept](#Concept)
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
A conference room dashboard application for the Maribeau office in Amsterdam. The dashboard shows several measurements done by sensors placed in the conference rooms. It shows the availability, temperature, humidity-, co2- and barometric pressure in the room.

The idea of this app is that employees of the Maribeau office can easily see what rooms are available and what the environment in the rooms is like. The values are shown in bars that change color when the levels raise to high. When the levels raise too high employees in the rooms will be warned.  

## To-do
- [x] server
- [ ] filter rooms, different sections
- [ ] change span width according to data
  - [ ] add inline styling width
- [ ] change color span according to value

## Resources
- [Maribeau documentation](https://bitbucket.org/davebitter/mirabeau-smart-office/src/master/)
- [Maribeau api, brought to you by Dennisdemennis](http://mirabeau.denniswegereef.nl/api/v1/rooms)
- [`Request` documentation](https://github.com/request/request)

## License
[MIT](LICENSE) © [Luna May Johansson](https://github.com/maybuzz)
