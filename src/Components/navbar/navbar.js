import React from 'react';
import $ from 'jquery';
import '..//..//SCSS/App.scss';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.clickNav = this.clickNav.bind(this);
        this.clickLink = this.clickLink.bind(this);
        this.toggleFullscreen = this.toggleFullscreen.bind(this);
    }
    
    clickNav = (e) => {
        $('.hamburger').toggleClass('is-active');
        $('header ul').slideToggle().addClass('show-nav');
    }

    clickLink = (e) => {
        if ($(window).width() < 500) {
            $('.hamburger').toggleClass('is-active');
            $('header ul').slideToggle().removeClass('show-nav');
        }
    }

    toggleFullscreen = (e) => {
        if ($(window).width() < 500) {
            // $('#root').requestFullscreen();
        }
    }

    render() {
        return (
            <header>
                <button onClick={this.clickNav} className="mobile-nav-toggle hamburger hamburger--squeeze">
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                    <span className="hamburger-label">Menu</span>
                </button>
                <ul>
                    <Link to="/" onClick={this.clickLink}>
                        <li>Home</li>
                    </Link>
                    <Link to="/signup" onClick={this.clickLink}>
                        <li>Signup</li>
                    </Link>
                    <Link to="/login" onClick={this.clickLink}>
                        <li>Login</li>
                    </Link>
                    <Link to="/calendar" onClick={this.clickLink}>
                        <li>Calendar</li>
                    </Link>
                    <Link>
                        <li>Settings</li>
                    </Link>
                </ul>
            </header>
        );
    }
}

export default Navbar;