import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul className="navbar">
          <li>Home</li>
          <li>Profile</li>
          <li>Signin</li>
          <li>Signup</li>
          <li className="search">
            <input type="text" className="search-input" placeholder="Search" />
          </li>
          <li>Logout</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
