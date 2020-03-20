import React from 'react';
import Navbar from '..//navbar/navbar';
import Aux from './Aux';

class Layout extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Aux>
                <Navbar />
                <main>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;