import React from 'react';
import $ from 'jquery';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { withCookies, Cookies } from 'react-cookie';
import Aux from '../layout/Aux';
import '..//..//SCSS/Signup.scss';

class Login extends React.Component {
    constructor(props) {
        super(props);
        const { cookies } = props;
        this.state = {
            username: '',
            password: '',
            toCalendar: false
        }
        this.changeHandler = this.changeHandler.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
        this.onStart = this.onStart.bind(this)
        this.closePopup = this.closePopup.bind(this)
    }

    componentDidMount() {
        this.onStart();
    }

    componentWillUnmount() {
        this.onStart();
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios.post('https://react-calendar-backend-api.herokuapp.com/login', this.state)

            .then(response => {
                console.log(response.data.message)

                if(response.data.message === 'Password match') {
                    const { cookies } = this.props;
                    // cookies.set('user_id', response.data.id, { path: '/signup' })
                    this.setState({
                        password: '',
                        toCalendar: true
                    })
                    $('.signup-form').animate({ scrollTop: 0 }, 500);
                } else {
                    this.setState({
                        username: '',
                        password: ''
                    })
                    $('.signup-form').animate({ scrollTop: 0 }, 500);
                    $('.fail-message').addClass('show-fail');
                }
            })

            .catch(error => {
                console.log(error)
            })
    }

    onStart = (e) => {
        $('body, html').animate({ scrollTop: 0}, 500);
    }

    closePopup = (e) => {
        $('.success-message').removeClass('show-success');
        $('.fail-message').removeClass('show-fail');
    }


    render() {
        const {  username, password } = this.state
        if (this.state.toCalendar === true) {
            return <Redirect to='/calendar' />
        }

        return (
            <Aux>
                <div className="signup-form">
                    <div className="form-nav">
                        <h2>Login</h2>
                    </div>
                    <form className="signupForm" onSubmit={this.submitHandler} ref={form => this.form = form}>
                        <div className="input-wrapper username">
                            <label>Username</label>
                            <input name="username" type="text" placeholder="Username" value={username} onChange={this.changeHandler} required/>
                        </div>
                        <div className="input-wrapper email">
                            <label>Password</label>
                            <input name="password" type="password" placeholder="Password" value={password} onChange={this.changeHandler} required/>
                        </div>
                        <div className="input-wrapper">
                            <button className="login" type="submit">Login</button>
                        </div>
                    </form>
                    <div className="success-message">Hi {username}, you are now logged in.</div>
                    <div className="fail-message">Hi, you haven't been logged in. Username or Password is incorrect. <div className="close-popup entypo-cancel" onClick={this.closePopup}></div></div>
                </div>
            </Aux>
        );
    }
}

export default Login;