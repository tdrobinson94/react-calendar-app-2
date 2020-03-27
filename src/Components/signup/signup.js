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
        })

        .catch(error => {
            console.log(error)
        })

        this.setState({
            firstname: '',
            lastname: '',
            username: '',
            email: '',
            password: ''
        })
        $('.signup-form').animate({ scrollTop: 0 }, 500);
    }

    onStart = (e) => {
        $('body, html').animate({ scrollTop: 0}, 500);
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
                            <input name="firstname" type="text" placeholder="First name" value={firstname} onChange={this.changeHandler}/>
                        </div>
                        <div className="input-wrapper item-name">
                            <label>Last Name</label>
                            <input name="lastname" type="text" placeholder="Last Name" value={lastname} onChange={this.changeHandler}/>
                        </div>
                        <div className="input-wrapper username">
                            <label>Username</label>
                            <input name="username" type="text" placeholder="Username" value={username} onChange={this.changeHandler}/>
                        </div>
                        <div className="input-wrapper email">
                            <label>Email</label>
                            <input name="email" type="email" placeholder="Email" value={email} onChange={this.changeHandler}/>
                        </div>
                        <div className="input-wrapper email">
                            <label>Password</label>
                            <input name="password" type="password" placeholder="Password" value={password} onChange={this.changeHandler}/>
                        </div>
                        <div className="input-wrapper">
                            <button className="signup" type="submit">Signup</button>
                        </div>
                    </form>
                </div>
            </Aux>
        );
    }
}

export default Signup;
