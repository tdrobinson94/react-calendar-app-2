import React from 'react';
import $ from 'jquery';
import '..//..//SCSS/App.scss';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.clickNav = this.clickNav.bind(this);
    }
    
    clickNav(e){
        $('.hamburger').toggleClass('is-active');
        $('header ul').slideToggle().addClass('show-nav');
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
                    <Link to="/signup">
                        <li>Signup</li>
                    </Link>
                    <li><a>Login</a></li>
                    <Link to="/calendar">
                    <li>Calendar</li>
                    </Link>
                    <li><a>Settings</a></li>
                </ul>
            </header>
        );
    }
}

export default Navbar;