import React, { Component } from 'react';
import './App.css'

class Header extends Component {
  render(){
    return(
      <div>
        <h1>BILL INFORMATION SYSTEM</h1>
        <hr/>
        <nav>
          <a href="/">Home</a>
          <a href="/Bills">Bills</a>
          <a href="/Senators">Senators</a>
          <a href="/HouseMember">House Members</a>
          <a href="/Reports">Reports</a>
        </nav>
        <hr/>
      </div>
    )
  }
}

export default Header;
