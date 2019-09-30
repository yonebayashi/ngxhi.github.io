import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import '../styles/header.css';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <Navbar />
      </header>
    )
  }
}