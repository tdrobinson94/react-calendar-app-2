import React from 'react';
import $ from 'jquery';
import '..//..//SCSS/App.scss';

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
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                    <span class="hamburger-label">Menu</span>
                </button>
                <ul>
                    <li><a href="/signup">Signup</a></li>
                    <li><a>Login</a></li>
                    <li><a href="/calendar">Calendar</a></li>
                    <li><a>Settings</a></li>
                </ul>
            </header>
        );
    }
}

export default Navbar;