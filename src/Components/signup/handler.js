import React from 'react';
import Signup from './signup';
import Login from './login';

class Handler extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userLogginActive: true
        }
        this.changeState = this.changeState.bind(this)
    }
    
    componentDidMount() {
        this.rightSide.classList.add("right");
    }

    changeState = (e) => {
        const { userLogginActive } = this.state;
        if (userLogginActive) {
            this.rightSide.classList.remove('right');
            this.rightSide.classList.add('left');
        } else {
            this.rightSide.classList.remove('left');
            this.rightSide.classList.add('right');
        }

        this.setState((prevState) => ({ userLogginActive: !prevState.userLogginActive }))
    }

    render() {
        const { userLogginActive } = this.state
        const current = userLogginActive ? 'Signup' : 'Login';
        const currentActive = userLogginActive ? 'Login' : 'Signup';
        return (
            <div className="handler">
                { userLogginActive && <Login containerRef={(ref) => this.current = ref} /> }
                { !userLogginActive && <Signup containerRef={(ref) => this.current = ref} /> }
                <RightSide current={current} containerRef={ref => this.rightSide = ref} onClick={this.changeState} />
            </div>
        )
    }

}


const RightSide = props => {
    return <div className="right-side" ref={props.containerRef} onClick={props.onClick}>
        <div className="inner-container">
            <div className="text">
                {props.current}
            </div>
        </div>
    </div>
}

export default Handler;