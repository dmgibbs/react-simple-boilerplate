
import React, {Component} from 'react';

class Message  extends React.Component {

  render() {
    const msgString  = (this.props.messageType === "incomingNotification") ? "message system" : "message";
    const theUser = (this.props.username ) ? <span className = "message-username">{this.props.username}</span>:
    null;
  return (
    <div className= {msgString}>
      {theUser}
      <span className= "message-content">{this.props.message}  </span>
    </div>
  )}
};

export default Message;





// Compose the message based on the message type. Incoming Messages have // no user.
// Nothing is rendered if username does not exist.
