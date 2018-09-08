# Chatty Project - By. D. Gibbs

Chatty is a simple, single-page Chatty clone.

This repository is for the project, the objective of which was for us to practice managing communication between an express server and a React App (client) using Websockets . This also involved using front-end skills such as HTML & CSS, along with Node.  The App runs alongside the server, which is responsible for broadcasting/receiving  messages to/from the App. (client)

## Instructions for setup of main app.

1. Clone this repository from https://github.com/dmgibbs/react-simple-boilerplate
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm start` command. The app will be served at <http://localhost:3000/>.
4. Go to <http://localhost:3000/> in your browser.


## Instructions for setup of chatty_server.
1. Change into subdirectory folder named "chatty_server".
2. Install the dependencies listed below using the `npm install` command :
    "express": "4.16.3",
    "uuid": "^3.3.2",
    "ws": "^6.0.0"

3. Start the web server using the `npm start` command. The app will be served at <http://localhost:3001/>.
5. Go to <http://localhost:3001/> in your browser.


## Instructions for usage of Application
1. The app will load and the user will be able to type messages which will be    
   broadcasted to the server and redisplayed on the application's user interface.

## Screenshots


## Dependencies

* React  (react, react-dom)
* Webpack
* [Babel-loader](https://github.com/Babel/Babel-loader)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)

- Babel-core
- Babel-preset-es2015
- Babel-preset-react
- Babel-preset-stage-0
- css-loader
- eslint
- eslint-plugin-react
- node-sass
- sass-loader
- sockjs-client
- style-loader
- uuid

## Install the dependencies and start the server.

```
npm install
npm start
open http://localhost:3000
