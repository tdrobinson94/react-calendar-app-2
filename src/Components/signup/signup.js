import React from 'react';
import $ from 'jquery';
import axios from 'axios';
import Aux from '../layout/Aux';
import '..//..//SCSS/Signup.scss';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            username: '',
            email: '',
            password: ''
        }
        this.changeHandler = this.changeHandler.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
        this.onStart = this.onStart.bind(this);
        this.closePopup = this.closePopup.bind(this)
    }

    componentDidMount() {
        this.onStart();
    }

    componentWillUnmount() {
        this.onStart();
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios.post('https://react-calendar-backend-api.herokuapp.com/signup', this.state)

        .then(response => {
            console.log(response)
            console.log(response.data.message)
            if (response.status === 201) {
                this.setState({
                    firstname: '',
                    lastname: '',
                    username: '',
                    email: '',
                    password: ''
                })
                $('.signup-form').animate({ scrollTop: 0 }, 500);
                $('.success-message').addClass('show-success');
                this.props.history.push('/login')
            } 
        })

        .catch(error => {
            console.log(error)
            this.setState({
                username: '',
                email: ''
            })
            $('.signup-form').animate({ scrollTop: 0 }, 500);
            $('.fail-message').addClass('show-fail');
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
        const { firstname, lastname, username, email, password } = this.state 
        return (
            <Aux>
                <div className="signup-form">
                    <div className="form-nav">
                        <h2>Signup</h2>
                    </div>
                    <form className="signupForm" onSubmit={this.submitHandler} ref={form => this.form = form}>
                        <div className="input-wrapper item-name">
                            <label>First Name</label>
                            <input name="firstname" type="text" placeholder="First name" value={firstname} onChange={this.changeHandler} required/>
                        </div>
                        <div className="input-wrapper item-name">
                            <label>Last Name</label>
                            <input name="lastname" type="text" placeholder="Last Name" value={lastname} onChange={this.changeHandler} required/>
                        </div>
                        <div className="input-wrapper username">
                            <label>Username</label>
                            <input name="username" type="text" placeholder="Username" value={username} onChange={this.changeHandler} required/>
                        </div>
                        <div className="input-wrapper email">
                            <label>Email</label>
                            <input name="email" type="email" placeholder="Email" value={email} onChange={this.changeHandler} required/>
                        </div>
                        <div className="input-wrapper email">
                            <label>Password</label>
                            <input name="password" type="password" placeholder="Password" value={password} onChange={this.changeHandler} required/>
                        </div>
                        <div className="input-wrapper">
                            <button className="signup" type="submit">Signup</button>
                        </div>
                    </form>
                    <div className="success-message">You are now signed up. Try logging in.</div>
                    <div className="fail-message">Email or Username has been taken by someone else. <div className="close-popup entypo-cancel" onClick={this.closePopup}></div></div>
                </div>
            </Aux>
        );
    }
}

export default Signup;
