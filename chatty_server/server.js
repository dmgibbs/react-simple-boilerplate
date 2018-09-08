const express = require('express');
const SocketServer = require('ws').Server;
const uuidv1 = require('uuid/v1');

// Set the port to 3001
const PORT = 3001;
var clientCount=0;
// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
wss.on('connection', (ws) => {
  console.log('Client connected');
  
  // When we have a new connection established
  // Send the number of connected client information to all users when a client connects.
  let clientinfo = {  type: "userconnections", users: wss.clients.size  };
  wss.clients.forEach(function (client) {
    client.send(JSON.stringify(clientinfo));
  })
  
  ws.on('message', broadcastBack);
  //clientCount++;
  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => {
    clientCount--;
    console.log('Client disconnected')
    let clientinfo = {  type: "userconnections", users: wss.clients.size , };
    wss.clients.forEach(function (client) {
      client.send(JSON.stringify(clientinfo));
    })
  });
});

// Callback function executed when a message is received - echo back in console
function broadcastBack(data){
  var msgType ="";

  wss.clients.forEach(function (client) {
      let outgoingMsg = JSON.parse(data);  // strip down the data
      // let uuid = uuidv1();      // generate unique ID

      switch(outgoingMsg['messageType']){   // generate a msgType
        case "postNotification" :
          msgType = "incomingNotification";
          break;
        case "postMessage" :
          msgType = "incomingMessage";
          break; 
      }
    //  Reconstruct the message for rebroadcast to the user
      let finalmsg = {
        id: uuidv1(),    //get a random  uuid from server

        username:     outgoingMsg['currentUser'], 
        message:      outgoingMsg['message'],
        messageType:  msgType,
        clients:      clientCount
      };
      finalmsg = JSON.stringify(finalmsg);
      client.send(finalmsg);
    })
  }