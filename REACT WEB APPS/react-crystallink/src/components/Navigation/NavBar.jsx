import React from 'react';
import Logo from './crystallink-logo.png';
import close_icon from './close_icon.png'
import menu_icon from './menu_icon.png'
import './NavBar.css'
import {hideSideBar, showSideBar} from './NavBarScript.js'




function NavBar() {
    return (
        <header>
            <nav>
                <ul className="sidebar">
                    <li onClick={hideSideBar}><img src={close_icon} alt="Nav close icon" height="26" width="26" /></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#abouts">About Us</a></li>
                    <li><a href="https://blog.crystallink.org">Blog</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                </ul>
                <ul>
                    <li>
                        <a href="#">
                            <img src={Logo} width="auto" height="30px" alt="Crystallink Tutorial Logo" />
                            <h1 className="roboto-black" id="caption">
                                <b id="caption1">CRYSTAL</b>
                                <b id="caption2">LINK</b>
                            </h1>
                        </a>
                    </li>
                    <li className="hideOnMobile"><a href="#home" className="nav-link">Home</a></li>
                    <li className="hideOnMobile"><a href="#services" className="nav-link">Services</a></li>
                    <li className="hideOnMobile"><a href="#about" className="nav-link">About Us</a></li>
                    <li className="hideOnMobile"><a href="https://blog.crystallink.org/" target="_blank" className="nav-link">Blog</a></li>
                    <li className="hideOnMobile"><a href="#contact" className="nav-link">Contact</a></li>
                    <li className="showOnMobile" onClick={showSideBar}>
                        <a href="#"><img src={menu_icon} height="26" width="26" alt="Menu Icon" /></a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;