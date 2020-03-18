import React from 'react';

import '..//..//SCSS/calendar.scss';
import Calendar_controls from './calendar_controls';
import Calendar_main from './calendar_main';
import Add_item from './add_item';

class Calendar extends React.Component {

    render() {
        return (
            <div id="calendarWrapper" className="calendar_wrapper" ref={el => this.el = el}>
                <Calendar_controls />
                <Calendar_main />
                <Add_item />
            </div>
        );
    }
}

export default Calendar;