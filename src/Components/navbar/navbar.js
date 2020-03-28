import React from 'react';
import $ from 'jquery';
import '..//..//SCSS/App.scss';
import { NavLink } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { auth } from '..//actions/auth';

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
        // const isLogged = useSelector(state => state.isLogged)
        return (
            <header>
                <button onClick={this.clickNav} className="mobile-nav-toggle hamburger hamburger--squeeze">
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                    <span className="hamburger-label">Menu</span>
                </button>
                <ul>
                    <NavLink to="/" onClick={this.clickLink}>
                        <li>Home</li>
                    </NavLink>
                    <NavLink to="/signup" onClick={this.clickLink} activeStyle={{
                        textDecoration: 'none',
                        color: 'black'
                    }}>
                        <li>Signup</li>
                    </NavLink>
                    <NavLink to="/login" onClick={this.clickLink} activeStyle={{
                        textDecoration: 'none',
                        color: 'black'
                    }}>
                        <li>Login</li>
                    </NavLink>
                    <NavLink to="/calendar" onClick={this.clickLink} activeStyle={{
                        textDecoration: 'none',
                        color: 'black'
                    }}>
                        <li>Calendar</li>
                    </NavLink>
                    <NavLink to="" activeStyle={{
                        textDecoration: 'none',
                        color: 'black'
                    }}>
                        <li>Settings</li>
                    </NavLink>
                </ul>
            </header>
        );
    }
}

export default Navbar;