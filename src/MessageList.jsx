import React, {Component} from 'react';
import Message from './Message.jsx';

// This module renders the list of messages for the APP.

class MessageList  extends React.Component {
  render() {
    const msgObject = this.props.messages.map( (message,index) =>  <Message key = {index} message ={message.content} username = {message.username} messageType= {message.messageType} /> ); 

    return (
    <main className="messages">
      {msgObject}
    </main>
    );
  }
}

export default  MessageList;