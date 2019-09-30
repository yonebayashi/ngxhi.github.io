import React, { Component } from 'react';
import '../styles/navbar.css';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="nav-icon">
        </div>
        <div className="nav-menu">
          <Link to='/'>About</Link>
          <Link to='/portfolio'>Porfolio</Link>
        </div>
      </nav>
    )
  }
}