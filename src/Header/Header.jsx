import React, { Component } from 'react'
import logo from '../assets/images/logo.svg';
import { FaTwitter , FaDiscord, FaYoutube, FaTelegramPlane} from 'react-icons/fa';
import './Header.css';

export default class Header extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
  render() {
    return (
      <>
        <header className='header'>
            <div className="header__container container">
                <nav className="header__nav nav d-flex">
                    <ul className="nav__list d-flex">
                        <li className="nav__list-item">
                            <a href="#" className="nav__link">
                                <img className='nav__logo' src={logo} alt="logo" />
                            </a>
                        </li>
                        <li className="nav__list-item">
                            <a href="#" className="nav__link">Wave NFTs</a>
                        </li>
                        <li className="nav__list-item">
                            <a href="#" className="nav__link">Stories</a>
                        </li>
                        <li className="nav__list-item">
                            <a href="#" className="nav__link">Contact</a>
                        </li>
                    </ul>
                    <ul className="nav__list-icons d-flex">
                        <li className="icons-item">
                            <a href="#" className="icons__link">
                                <FaTwitter/>
                            </a>
                            <a href="#" className="icons__link">
                                <FaDiscord/>
                            </a>
                            <a href="#" className="icons__link">
                                <FaYoutube/>
                            </a>
                            <a href="#" className="icons__link">
                                <FaTelegramPlane/>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
      </>
    )
  }
}
