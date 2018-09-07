import React from 'react';

export default class Navigation extends React.Component {
  render() {
    console.log("From navigation : number of users: ", this.props.users);
    return (
      <nav className="navbar">
        <a href="/" className="navbar-brand" >Chatty!</a>
         <span className= "navbar-brand">  Online Users: {this.props.users}</span>
      </nav>
    );
  }
}

