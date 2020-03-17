import React from 'react';
import $ from 'jquery';

class Add_item extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="add-item-container">
                <button class="add-item-button entypo-list-add"></button>
                
            </div>
        );
    }
}

export default Add_item;