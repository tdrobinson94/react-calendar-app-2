import React from 'react';
import $ from 'jquery';

class Add_item extends React.Component {
    constructor(props) {
        super(props);

        this.openForm = this.openForm.bind(this);
        this.closeForm = this.closeForm.bind(this);
        this.selectItemFrequency = this.selectItemFrequency.bind(this);
    }

    openForm(e) {
        let clock = new Date();
        let day = $('.clicked-day').attr('value');
        let currentTime = clock.getHours() + ':' + clock.getMinutes()

        $('.select-item label').removeClass('selected');
        $('.checkbox label').removeClass('selected');
        let month = (parseInt($('.month-selector').val(), 10) + 1);
        let year = (parseInt($('.year-selector').val(), 10));
        if (month < 10)
            month = "0" + month;
        if (day < 10)
            day = "0" + day;
        var today = year + '-' + month + '-' + day;
        $('.date-input').val(today);
        $('.time-input').val(currentTime);
        $('.add-item-form').addClass('show-form');
        $('.event-description, .description-label, .location-input, .location-label, .time-input, .time-label').addClass('show-input');

        if ($(window).width() <= 800) {

        } else {
            $('.clicked-day').removeClass('double-click');
        }

        $('.select-item label.item_1').addClass('selected');
        $('.checkbox label.frequency_1').addClass('selected');
    }

    closeForm(e) {
        $('.add-item-form').removeClass('show-form');

        function scrollDay() {
            $('body, html').animate({ scrollTop: $('.clicked-day').offset().top - 250 }, 500);
        }

        window.setTimeout(scrollDay, .3);
    }

    selectItemFrequency(e) {
        $('.checkbox').not(e.currentTarget).prop('checked', false);
        $('.select-item label').removeClass('selected');

        switch ($(e.currentTarget).hasClass('item_1')) {
            case $(e.currentTarget).hasClass('item_1'):
                console.log("Event")
                $(e.currentTarget).addClass('selected');
                break;
            case $(e.currentTarget).hasClass('item_2'):
                console.log("Reminder")
                $(e.currentTarget).addClass('selected');
                break;
            case $(e.currentTarget).hasClass('item_3'):
                console.log("Task")
                $(e.currentTarget).addClass('selected');
                break;
            case $(e.currentTarget).hasClass('item_4'):
                console.log("Budget")
                $(e.currentTarget).addClass('selected');
                break;
            case $(e.currentTarget).hasClass('item_5'):
                console.log("Food")
                $(e.currentTarget).addClass('selected');
                break;
        }
    }

    render() {
        return (
            <div className="add-item-container">
                <button onClick={this.openForm} className="add-item-button entypo-list-add"></button>
                <div className="add-item-form">
                    <div className="form-nav">
                        <h2>Place Items on Calendar</h2>
                        <div onClick={this.closeForm} className="close-form entypo-down-open"></div>
                    </div>
                    <form>
                        <label>Title</label>
                        <input type="text" className="item-title" placeholder="Title or name"/>

                        <label>Select Type</label>
                        <div className="select-item">
                            <input className="checkbox" type="checkbox" id="checkbox1" defaultChecked />
                            <label onClick={this.selectItemFrequency}htmlFor="checkbox1" className="item_1">Event</label>

                            <input className="checkbox" type="checkbox" id="checkbox2" />
                            <label onClick={this.selectItemFrequency}htmlFor="checkbox2" className="item_2">Reminder</label>

                            <input className="checkbox" type="checkbox" id="checkbox3" />
                            <label onClick={this.selectItemFrequency}htmlFor="checkbox3" className="item_3">Task</label>

                            <input className="checkbox" type="checkbox" id="checkbox4" />
                            <label onClick={this.selectItemFrequency}htmlFor="checkbox4" className="item_4">Budget</label>

                            <input className="checkbox" type="checkbox" id="checkbox5" />
                            <label onClick={this.selectItemFrequency}htmlFor="checkbox5" className="item_5">Food</label>
                        </div>

                        <label>Select Date</label>
                        <input className="date-input" type="date" />

                        <label className="time-label">Select Time</label>
                        <input className="time-input" type="time" />

                        <label>Select Frequency</label>
                        <div className="checkbox">
                            <input className="frequency first-checkbox" type="checkbox" id="frequency1" value="Once" defaultChecked />
                            <label htmlFor="frequency1" className="frequency_1">Once</label>

                            <input className="frequency" type="checkbox" value="Daily" id="frequency2" />
                            <label htmlFor="frequency2" className="frequency_2">Daily</label>

                            <input className="frequency" type="checkbox" value="Weekly" id="frequency3" />
                            <label htmlFor="frequency3" className="frequency_3">Weekly</label>

                            <input className="frequency" type="checkbox" value="Bi-weekly" id="frequency4" />
                            <label htmlFor="frequency4" className="frequency_4">Bi-Weekly</label>

                            <input className="frequency" type="checkbox" value="Monthly" id="frequency5" />
                            <label htmlFor="frequency5" className="frequency_5">Monthly</label>

                            <input className="frequency" type="checkbox" value="Semi-annual" id="frequency6" />
                            <label htmlFor="frequency6" className="frequency_6">Semi-annual</label>

                            <input className="frequency" type="checkbox" value="Annual" id="frequency7" />
                            <label htmlFor="frequency7" className="frequency_7">Annual</label>
                        </div>

                        <label className="description-label">Description</label>
                        <input type="text" className="event-description" placeholder="Add description"/>

                        <label className="location-label">Location</label>
                        <input type="text" className="location-input" placeholder="Location"/>

                        <label className="amount-label">Amount</label>
                        <input type="text" className="amount-input" placeholder="Amount"/>
                        <button className="submit-form" type="submit">Enter</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Add_item;