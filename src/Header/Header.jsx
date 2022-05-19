import React, { Component } from 'react'
import './Header.css';
import logo from '../assets/images/LOGO.svg'
import Button from '../Components/Button';

export default class Header extends Component {
  render() {
    return (
      <header>
          <div className="container">
              <nav className="header-nav">
                  <a href="#home" className="nav-logo">
                    <img src={logo} alt="logo" />
                  </a>
                  <ul className="nav-list">
                      <li className="nav-item">
                          <a href="#home" className="nav-link">Home</a>
                      </li>
                      <li className="nav-item">
                          <a href="#about" className="nav-link">About</a>
                      </li>
                      <li className="nav-item">
                          <a href="#service" className="nav-link">Service</a>
                      </li>
                      <li className="nav-item">
                          <a href="#reviews" className="nav-link">Reviews</a>
                      </li>
                  </ul>
                  <Button title='Get Started' />
              </nav>
          </div>
      </header>
    )
  }
}
