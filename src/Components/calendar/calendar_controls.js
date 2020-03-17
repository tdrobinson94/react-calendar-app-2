import React from 'react';
import { MONTHS } from '..//..//Utilities/months.constant.js'
import $ from 'jquery';
import _ from 'lodash';

let clock = new Date();
let month = clock.getMonth();
let year = clock.getFullYear();


class Calendar_controls extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.prevClick = this.prevClick.bind(this);
        this.currentClick = this.currentClick.bind(this);
        this.nextClick = this.nextClick.bind(this);
    }

    componentDidMount() {
        window.addEventListener('load', this.handleChange);
    }

    componentWillUnmount() {
        window.removeEventListener('load', this.handleChange)
    }

    handleChange(e) {
        $('.add-item-form').removeClass('show-form');
        $('.num-box').removeClass('clicked-day');
        $('.num-date').removeClass('first-day current-day');
        $('.num-box').removeClass('selected-day');

        //=================== Render Current month days as well as next month days ==================//
        function renderMonth() {
            MONTHS[1].days = Number($('#year').val()) % 4 == 0 ? 29 : 28;
            let currentMonth = $(document).find('#month').val();
            let nextMonth = Number($(document).find('#month').val()) + 2;
            let currentYear = $(document).find('#year').val();
            let startOfMonth = new Date(currentYear, currentMonth, 1).getDay();
            let monthDays = MONTHS[$(document).find('#month').val()].days;
            let days = $(document).find('.days').children();
            $(document).find('.num').empty();

            _.range(1, 43).forEach(function (dayIndex, i) {
                let day = $(days[startOfMonth + dayIndex - 1]);

                if (clock.getDate() === dayIndex && clock.getMonth() == $('#month').val() && clock.getFullYear() == $('#year').val()) {
                    day.find('.weekday').children().addClass('current-day');
                    day.find('.weekday').parent().addClass('clicked-day day_background_color selected-day');
                    day.find('.num-date').parent().parent().removeClass("dead_month_color");
                } else {
                    day.find('.weekday').children().removeClass('current-day');
                    day.find('.num-date').parent().parent().removeClass("dead_month_color day_background_color");
                }
                if (dayIndex > monthDays) {
                    day.find('.num').html(dayIndex - monthDays).parent().parent().addClass("dead_month_color");
                    if (nextMonth == 13) {
                        nextMonth = 1;
                        currentYear = Number(currentYear) + 1;
                    }
                    if (nextMonth < 10) {
                        let newMonth = nextMonth;
                        let standardMonth = '0' + nextMonth;
                        if ((dayIndex - monthDays) < 10) {
                            let newDayIndex = (dayIndex - monthDays);
                            let standardDayIndex = '0' + (dayIndex - monthDays);
                            day.find('.date-value').html(currentYear + '-' + standardMonth + '-' + standardDayIndex);
                            day.find('.num-date').html(newDayIndex).parent().parent().addClass("dead_month_color");
                        } else {
                            day.find('.date-value').html(currentYear + '-' + standardMonth + '-' + (dayIndex - monthDays));
                            day.find('.num-date').html((dayIndex - monthDays)).parent().parent().addClass("dead_month_color");
                        }
                    } else {
                        let standardMonth = '0' + nextMonth;
                        if ((dayIndex - monthDays) < 10) {
                            let newDayIndex = (dayIndex - monthDays);
                            let standardDayIndex = '0' + (dayIndex - monthDays);
                            day.find('.date-value').html(currentYear + '-' + standardMonth + '-' + standardDayIndex);;
                            day.find('.num-date').html(newDayIndex).parent().parent().addClass("dead_month_color");
                        } else {
                            day.find('.date-value').html(currentYear + '-' + standardMonth + '-' + (dayIndex - monthDays));
                            day.find('.num-date').html((dayIndex - monthDays)).parent().parent().addClass("dead_month_color");
                        }
                    }
                } else {
                    day.find('.num').html(dayIndex);
                    let thisMonth = (Number(currentMonth) + 1);
                    if (thisMonth < 10) {
                        let newMonth = thisMonth
                        let standardNewMonth = '0' + thisMonth;
                        if (dayIndex < 10) {
                            let newDays = dayIndex;
                            let standardNewDays = '0' + dayIndex;
                            day.find('.date-value').html(currentYear + '-' + standardNewMonth + '-' + standardNewDays);
                            day.find('.num-date').html("&nbsp" + newDays + "&nbsp");
                        } else {
                            day.find('.date-value').html(currentYear + '-' + standardNewMonth + '-' + (dayIndex));
                            day.find('.num-date').html((dayIndex));
                        }
                    } else {
                        if (dayIndex < 10) {
                            let newDays = dayIndex;
                            let standardNewDays = '0' + dayIndex;
                            day.find('.date-value').html(currentYear + '-' + thisMonth + '-' + standardNewDays);
                            day.find('.num-date').html("&nbsp" + newDays + "&nbsp");
                        } else {
                            day.find('.date-value').html(currentYear + '-' + thisMonth + '-' + (dayIndex));
                            day.find('.num-date').html((dayIndex));
                        }
                    }
                }
                if (day.find('.num-date').html() === '&nbsp;' + '1' + '&nbsp;') {
                    day.find('.num-date').addClass('first-day');
                } else {
                    day.find('.num-date').removeClass('first-day');
                }
            })

        };

        //=================== Render Previous month days ==================//
        function renderPrevMonthDays() {
            MONTHS[1].days = Number($(document).find('#year').val()) % 4 == 0 ? 29 : 28
            let currentYear = $(document).find('#year').val();
            let prevMonth = Number($(document).find('#month').val());
            let startOfMonth = new Date($(document).find('#year').val(), $(document).find('#month').val(), 1).getDay();
            let monthDays = MONTHS[$(document).find('#month').val()].days;
            let prevMonthDays = $(document).find('#month').val() == 0 ? 31 : MONTHS[$(document).find('#month').val() - 1].days;
            let days = $(document).find('.days').children();
            let prevDays = _.range(1, prevMonthDays + 1).slice(-startOfMonth);
            _.range(0, startOfMonth).forEach(function (dayIndex) {
                let day = $(days[dayIndex]);
                if (startOfMonth > dayIndex) {
                    day.find('.num').html(prevDays[dayIndex]);
                    if (prevMonth == 0) {
                        prevMonth = 12;
                        currentYear = Number(currentYear) - 1;
                    }
                    if (prevMonth < 10) {
                        let newMonth = prevMonth;
                        let standardNewMonth = '0' + prevMonth;
                        day.find('.date-value').html(currentYear + '-' + standardNewMonth + '-' + (prevDays[dayIndex]));
                        day.find('.num-date').html((prevDays[dayIndex]));
                    } else {
                        day.find('.date-value').html(currentYear + '-' + prevMonth + '-' + (prevDays[dayIndex]));
                        day.find('.num-date').html((prevDays[dayIndex]));
                    }

                    day.find('.num-date').parent().parent().addClass("dead_month_color");
                    day.find('.num-container').parent().removeClass("day_background_color");
                }
            })
        }
        function scrollDay() {
            if ($('.num-box').hasClass('day_background_color') === true) {
                $('body, html').animate({ scrollTop: $('.day_background_color').offset().top - 150 }, 500);
                $(document).find('#todays-day').html($('.current-day').html())
            } else if ($('.num-date').hasClass('first-day') === true) {
                $('.first-day').parent().parent().addClass('selected-day clicked-day');
                $('body, html').animate({ scrollTop: $('.first-day').offset().top - 150 }, 500);
                $('.dead_month_color').removeClass('clicked-day');
            }
        }

        window.setTimeout(scrollDay, .5);
        renderMonth();
        renderPrevMonthDays();

        $('.dead_month_color').click(false);
    }

    prevClick(e) {
        $('.extra').hide()
        $('.add-item-form').removeClass('show-form');
        $('.num-box').removeClass('selected-day double-click');
        $('.num-date').removeClass('first-day');
        $('.transaction-button').removeClass('show');
        if ($(document).find('#year').val() <= (year - 5)) {
            $(document).find('#year').val(year - 5).change()
            $(document).find('#month').val(0).change()
        } else {
            if ($('#month').val() == null || $('#month').val() == 0) {
                $(document).find('#month').val(11).change()
                $(document).find('#year').val(Number($(document).find('#year').val()) - 1).change()
            } else {
                $(document).find('#month').val(Number($(document).find('#month').val()) - 1).change();
            }
        }
        this.handleChange();

        function scrollDay() {
            if ($('.num-box').hasClass('selected-day')) {
                console.log('change');
                $('body, html').animate({ scrollTop: $('.selected-day').offset().top - 150 }, 500);
            }
        }
        window.setTimeout(scrollDay, 500);
    }

    currentClick(e) {
        $('.extra').hide()
        $('.add-item-form').removeClass('show-form');
        $('.num-box').removeClass('selected-day double-click');
        $('.num-date').removeClass('first-day');
        $('.transaction-button').removeClass('show');
        $(document).find('#month').val(month).change()
        $(document).find('#year').val(year).change()
        this.handleChange()
        $('body, html').animate({ scrollTop: $('.day_background_color').offset().top - 150 }, 500);
    }

    nextClick(e) {
        $('.extra').hide()
        $('.add-item-form').removeClass('show-form');
        $('.num-box').removeClass('selected-day double-click');
        $('.num-date').removeClass('first-day');
        $('.transaction-button').removeClass('show');
        if ($(document).find('#year').val() >= (year + 5) && $(document).find('#month').val() == 11) {
            $(document).find('#year').val(year + 5).change()
            $(document).find('#month').val(11).change()
        } else {
            if ($(document).find('#month').val() == null || $(document).find('#month').val() == 11) {
                $(document).find('#month').val(0).change()
                $(document).find('#year').val(Number($(document).find('#year').val()) + 1).change()
            } else {
                $(document).find('#month').val(Number($(document).find('#month').val()) + 1).change();
            }
        }
        this.handleChange()

        function scrollDay() {
            if ($('.num-box').hasClass('selected-day')) {
                $('body, html').animate({ scrollTop: $('.selected-day').offset().top - 150 }, 500);
            }
        }
        window.setTimeout(scrollDay, .5);
    }

    render() {
        return (
            <div className="month calendar_controls_bar">
                <div className="controls">
                    <form className="select-form">
                        <div className="date-selectors">
                            <select onChange={this.handleChange} name="select" className="month-selector selector" id="month" defaultValue={month}>
                                <option value={month}>{MONTHS[month].name}</option>
                                <option value="0">{MONTHS[0].name}</option>
                                <option value="1">{MONTHS[1].name}</option>
                                <option value="2">{MONTHS[2].name}</option>
                                <option value="3">{MONTHS[3].name}</option>
                                <option value="4">{MONTHS[4].name}</option>
                                <option value="5">{MONTHS[5].name}</option>
                                <option value="6">{MONTHS[6].name}</option>
                                <option value="7">{MONTHS[7].name}</option>
                                <option value="8">{MONTHS[8].name}</option>
                                <option value="9">{MONTHS[9].name}</option>
                                <option value="10">{MONTHS[10].name}</option>
                                <option value="11">{MONTHS[11].name}</option>
                            </select>
                            <select onChange={this.handleChange} name="select" className="year-selector selector" id="year" defaultValue={year}>
                                <option value={year - 5}>{year - 5}</option>
                                <option value={year - 4}>{year - 4}</option>
                                <option value={year - 3}>{year - 3}</option>
                                <option value={year - 2}>{year - 2}</option>
                                <option value={year - 1}>{year - 1}</option>
                                <option value={year}>{year}</option>
                                <option value={year + 1}>{year + 1}</option>
                                <option value={year + 2}>{year + 2}</option>
                                <option value={year + 3}>{year + 3}</option>
                                <option value={year + 4}>{year + 4}</option>
                                <option value={year + 5}>{year + 5}</option>
                            </select>
                        </div>
                    </form>

                    <div className="calendar-controls">
                        <button onClick={this.prevClick} className="prev button entypo-left-open"></button>
                        <button onClick={this.currentClick} id="todays-day" className="current button entypo-calendar"></button>
                        <button onClick={this.nextClick} className="next button entypo-right-open"></button>
                    </div>
                </div>

                <div className="weekday-initials">
                    <div>Sun</div>
                    <div>Mon</div>
                    <div>Tue</div>
                    <div>Wed</div>
                    <div>Thu</div>
                    <div>Fri</div>
                    <div>Sat</div>
                </div>
            </div>
        );
    }
}

export default Calendar_controls;