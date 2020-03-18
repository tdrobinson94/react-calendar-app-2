import React from 'react';
import $ from 'jquery';

class Add_item extends React.Component {
    constructor(props) {
        super(props);

        this.openForm = this.openForm.bind(this);
        this.closeForm = this.closeForm.bind(this);
        this.selectItemEvent = this.selectItemEvent.bind(this);
        this.selectItemFreq = this.selectItemFreq.bind(this);
    }

    openForm(e) {
        let clock = new Date();
        let day = $('.clicked-day').attr('value');
        let minutes = String(clock.getMinutes()).padStart(2, '0');
        let currentTime = clock.getHours() + ':' + minutes;

        $('.select-item label').removeClass('selected');
        $('.checkbox label').removeClass('selected');
        let month = (parseInt($('.month-selector').val(), 10) + 1);
        let year = (parseInt($('.year-selector').val(), 10));
        if (month < 10)
            month = "0" + month;
        if (day < 10)
            day = "0" + day;
        var today = year + '-' + month + '-' + day;
        $('.date-input input').val(today);
        console.log(currentTime)
        $('.time').val(currentTime);
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

    selectItemEvent(e) {
        $('.checkbox').not(e.currentTarget).prop('checked', false);
        $('.select-item label').removeClass('selected');

        if ($(e.currentTarget).hasClass('item_1')) {
            console.log("Event")
            $(e.currentTarget).addClass('selected');
            $('.event-description, .description-label, .location-input, .location-label, .time-input, .time-label').addClass('show-input');
            $('.amount-input, .amount-label').removeClass('show-input');
        } else if ($(e.currentTarget).hasClass('item_2')) {
            console.log("Reminder")
            $(e.currentTarget).addClass('selected');
            $('.time-input, .time-label, .location-input, .location-label').addClass('show-input');
            $('.event-description, .description-label').removeClass('show-input');
            $('.amount-input, .amount-label').removeClass('show-input');
        } else if ($(e.currentTarget).hasClass('item_3')) {
            console.log("Task")
            $(e.currentTarget).addClass('selected');
            $('.event-description, .description-label, .time-input, .time-label').addClass('show-input');
            $('.amount-input, .amount-label, .location-input, .location-label').removeClass('show-input');
        } else if ($(e.currentTarget).hasClass('item_4')) {
            console.log("Budget")
            $(e.currentTarget).addClass('selected');
            $('.event-description, .description-label, .location-input, .location-label, .time-input, .time-label').removeClass('show-input');
            $('.amount-input, .amount-label').addClass('show-input');
        } else if ($(e.currentTarget).hasClass('item_5')) {
            console.log("Food")
            $(e.currentTarget).addClass('selected');
            $('.event-description, .description-label, .location-input, .location-label, .time-input, .time-label').removeClass('show-input');
            $('.amount-input, .amount-label').addClass('show-input');
        }
    }

    selectItemFreq(e) {
        $('.frequency').not(e.currentTarget).prop('checked', false);
        $('.checkbox label').removeClass('selected');

        if ($(e.currentTarget).hasClass('frequency_1')) {
            console.log("Item 1")
            $(e.currentTarget).addClass('selected')
        } else if ($(e.currentTarget).hasClass('frequency_2')) {
            console.log("Item 2")
            $(e.currentTarget).addClass('selected')
        } else if ($(e.currentTarget).hasClass('frequency_3')) {
            console.log("Item 3")
            $(e.currentTarget).addClass('selected')
        } else if ($(e.currentTarget).hasClass('frequency_4')) {
            console.log("Item 4")
            $(e.currentTarget).addClass('selected')
        } else if ($(e.currentTarget).hasClass('frequency_5')) {
            console.log("Item 5")
            $(e.currentTarget).addClass('selected')
        } else if ($(e.currentTarget).hasClass('frequency_6')) {
            console.log("Item 6")
            $(e.currentTarget).addClass('selected')
        } else if ($(e.currentTarget).hasClass('frequency_7')) {
            console.log("Item 7")
            $(e.currentTarget).addClass('selected')
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
                        <div className="group">
                            <div className="input-wrapper">
                                <label>Select Type</label>
                                <div className="select-item">
                                    <input className="checkbox" type="checkbox" id="checkbox1" defaultChecked />
                                    <label onClick={this.selectItemEvent}htmlFor="checkbox1" className="item_1">Event</label>

                                    <input className="checkbox" type="checkbox" id="checkbox2" />
                                    <label onClick={this.selectItemEvent}htmlFor="checkbox2" className="item_2">Reminder</label>

                                    <input className="checkbox" type="checkbox" id="checkbox3" />
                                    <label onClick={this.selectItemEvent}htmlFor="checkbox3" className="item_3">Task</label>

                                    <input className="checkbox" type="checkbox" id="checkbox4" />
                                    <label onClick={this.selectItemEvent}htmlFor="checkbox4" className="item_4">Budget</label>

                                    <input className="checkbox" type="checkbox" id="checkbox5" />
                                    <label onClick={this.selectItemEvent}htmlFor="checkbox5" className="item_5">Food</label>
                                </div>
                            </div>

                            <div className="input-wrapper item-title">
                                <label>Title</label>
                                <input type="text" placeholder="Title or name" />
                            </div>

                            <div className="input-wrapper event-description">
                                <label className="description-label">Description</label>
                                <textarea placeholder="Add description"></textarea>
                            </div>

                            <div className="input-wrapper location-input">
                                <label className="location-label">Location</label>
                                <input type="text" placeholder="Location" />
                            </div>

                            <div className="input-wrapper amount-input">
                                <label className="amount-label">Amount</label>
                                <input type="text" placeholder="Amount" />
                            </div>

                        </div>
                        <div className="group">

                            <div className="input-wrapper">
                                <label>Select Frequency</label>
                                <div className="checkbox">
                                    <input className="frequency first-checkbox" type="checkbox" id="frequency1" value="Once" defaultChecked />
                                    <label onClick={this.selectItemFreq} htmlFor="frequency1" className="frequency_1">Once</label>

                                    <input className="frequency" type="checkbox" value="Daily" id="frequency2" />
                                    <label onClick={this.selectItemFreq} htmlFor="frequency2" className="frequency_2">Daily</label>

                                    <input className="frequency" type="checkbox" value="Weekly" id="frequency3" />
                                    <label onClick={this.selectItemFreq} htmlFor="frequency3" className="frequency_3">Weekly</label>

                                    <input className="frequency" type="checkbox" value="Bi-weekly" id="frequency4" />
                                    <label onClick={this.selectItemFreq} htmlFor="frequency4" className="frequency_4">Bi-Weekly</label>

                                    <input className="frequency" type="checkbox" value="Monthly" id="frequency5" />
                                    <label onClick={this.selectItemFreq} htmlFor="frequency5" className="frequency_5">Monthly</label>

                                    <input className="frequency" type="checkbox" value="Semi-annual" id="frequency6" />
                                    <label onClick={this.selectItemFreq} htmlFor="frequency6" className="frequency_6">Semi-annual</label>

                                    <input className="frequency" type="checkbox" value="Annual" id="frequency7" />
                                    <label onClick={this.selectItemFreq} htmlFor="frequency7" className="frequency_7">Annual</label>
                                </div>
                            </div>

                            <div className="input-wrapper date-input">
                                <label>Select Date</label>
                                <input type="date" />
                            </div>

                            <div className="input-wrapper time-input">
                                <label className="time-label">Select Time</label>
                                <input type="time" className="time" />
                            </div>
                        </div>

                        <div className="input-wrapper">
                            <button className="submit-form" type="submit">Enter</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Add_item;