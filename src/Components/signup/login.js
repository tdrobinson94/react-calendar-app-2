import React from 'react';
import $ from 'jquery';
import axios from 'axios';
import Aux from '../layout/Aux';
import '..//..//SCSS/Signup.scss';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.changeHandler = this.changeHandler.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
        this.onStart = this.onStart.bind(this);
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
                console.log(response)
                // $('.success-message').addClass('show-success');
            })

            .catch(error => {
                console.log(error)
            })

            this.setState({ 
                password: ''
            })
            $('.signup-form').animate({ scrollTop: 0 }, 500);
    }

    onStart = (e) => {
        $('body, html').animate({ scrollTop: 0}, 500);
    }
    render() {
        const {  username, password } = this.state
        return (
            <Aux>
                <div className="signup-form">
                    <div className="form-nav">
                        <h2>Login</h2>
                    </div>
                    <form className="signupForm" onSubmit={this.submitHandler} ref={form => this.form = form}>
                        <div className="input-wrapper username">
                            <label>Username</label>
                            <input name="username" type="text" placeholder="Username" value={username} onChange={this.changeHandler}/>
                        </div>
                        <div className="input-wrapper email">
                            <label>Password</label>
                            <input name="password" type="password" placeholder="Password" value={password} onChange={this.changeHandler}/>
                        </div>
                        <div className="input-wrapper">
                            <button className="login" type="submit">Login</button>
                        </div>
                    </form>
                    <div class="success-message">Hi {username}, you are now logged in.</div>
                    <div class="fail-message">Hi {username}, you haven't been logged in. Username or Password is incorrect.</div>
                </div>
            </Aux>
        );
    }
}

export default Login;