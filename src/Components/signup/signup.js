import React from 'react';
import $ from 'jquery';
import Aux from '../layout/Aux';
import '..//..//SCSS/Signup.scss';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.onStart = this.onStart.bind(this);
    }

    componentDidMount() {
        this.onStart();
    }

    componentWillUnmount() {
        this.onStart();
    }

    onStart = (e) => {
        $('body, html').animate({ scrollTop: 0}, 500);
    }
    render() {
        return (
            <Aux>
                <div className="signup-form">
                    <div className="form-nav">
                        <h2>Signup</h2>
                    </div>
                    <form>
                        <div className="input-wrapper item-name">
                            <label>First Name</label>
                            <input type="text" placeholder="First name" />
                        </div>
                        <div className="input-wrapper item-name">
                            <label>Last Name</label>
                            <input type="text" placeholder="Last Name" />
                        </div>
                        <div className="input-wrapper username">
                            <label>Username</label>
                            <input type="text" placeholder="Username" />
                        </div>
                        <div className="input-wrapper email">
                            <label>Email</label>
                            <input type="email" placeholder="Email" />
                        </div>
                        <div className="input-wrapper email">
                            <label>Password</label>
                            <input type="password" placeholder="Password" />
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
