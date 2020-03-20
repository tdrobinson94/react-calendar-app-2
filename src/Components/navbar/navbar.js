import React from 'react';
import $ from 'jquery';
import '..//..//SCSS/App.scss';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.clickNav = this.clickNav.bind(this);
        this.clickLink = this.clickLink.bind(this);
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
                    <Link to="/signup" onClick={this.clickLink}>
                        <li>Signup</li>
                    </Link>
                    <li>Login</li>
                    <Link to="/calendar" onClick={this.clickLink}>
                    <li>Calendar</li>
                    </Link>
                    <li>Settings</li>
                </ul>
            </header>
        );
    }
}

export default Navbar;