import React, {Component} from 'react';

class ChatBar  extends React.Component {

  constructor(props){
    super(props); 

   this.state  = 
    {
      currentUser:this.props.currentUser,
      message:"" 
   }
  }
  
  render() {
    return (
      <footer className="chatbar">
        <input className="chatbar-username" onKeyPress ={this.props.updateMsgContainer} placeholder="Your Name (Optional)" defaultValue = {this.props.currentUser} />
        <input className="chatbar-message" onKeyPress ={this.props.updateMsgContainer} placeholder="Type a message and hit ENTER" />
      </footer>
    );
  }
}


export default ChatBar;