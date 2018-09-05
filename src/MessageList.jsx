import React, {Component} from 'react';
import Message from './Message.jsx';


class MessageList  extends React.Component {
  render() {
    
    const msgObject = this.props.messages.map( message =>  <Message key = {message.id} message ={message.content} username = {message.username} /> ); 
    console.log("new object: ", msgObject);

    return (
    <main className="messages">
      {msgObject}
    </main>
    );
  }
}
// return (
//   <main className="messages">
//     <Message />
//   </main>
//   );
export default  MessageList;