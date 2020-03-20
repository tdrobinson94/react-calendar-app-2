import React from 'react';
import $ from 'jquery';
import Aux from '..//layout/Aux';
import '..//..//SCSS/home.scss';

class Home extends React.Component {
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
        $('body, html').animate({ scrollTop: 0 }, 500);
    }

    render() {
        return (
            <Aux>
                <h1>Home</h1>
            </Aux>
        );
    }
}

export default Home;