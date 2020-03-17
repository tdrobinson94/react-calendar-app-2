import React from 'react';
import $ from 'jquery';

class Calendar_main extends React.Component {
    constructor(props) {
        super(props);
        this.clickonDay = this.clickonDay.bind(this);
        this.closeDay = this.closeDay.bind(this);
    }


    clickonDay(e) {
        $('.num-box').removeClass('clicked-day');
        $('.add-item-form').removeClass('show-form');
        $('.extra').hide();

        if (e.currentTarget) {
            $(e.currentTarget).addClass('clicked-day');
        } 

        if ($(e.currentTarget).hasClass('clicked-day')) {
            $('.clicked-day').click(function () {
                $('.num-box').removeClass('double-click');
                console.log('opening day');
                $('.clicked-day').addClass('double-click');
                $('.extra').show();
            })
        }

        function scrollDay() {
            $('body, html').animate({ scrollTop: $('.clicked-day').offset().top - 150 }, 500);
        }

        window.setTimeout(scrollDay, .3);
    }

    closeDay(e) {
        console.log('closing day');
        $('.num-box').removeClass('double-click');
        $('.extra').hide();
    }

    render() {
        return (
            <div className="calendar-container">
                <div className="days">
                    <div onClick={this.clickonDay} id="num-box" className="num-box dead_month_color">
                        <div className="weekday"><span className="num-date"></span></div>
                        <div className="main-info"></div>
                        <div className="date-value"></div>
                        <div onClick={this.closeDay} className="close-day entypo-down-open"></div>
                    </div>
                    <div onClick={this.clickonDay} id="num-box" className="num-box dead_month_color">
                        <div className="weekday"><span className="num-date"></span></div>
                        <div className="main-info"></div>
                        <div className="date-value"></div>
                        <div onClick={this.closeDay} className="close-day entypo-down-open"></div>
                    </div>
                    <div onClick={this.clickonDay} id="num-box" className="num-box dead_month_color">
                        <div className="weekday"><span className="num-date"></span></div>
                        <div className="main-info"></div>
                        <div className="date-value"></div>
                        <div onClick={this.closeDay} className="close-day entypo-down-open"></div>
                    </div>
                    <div onClick={this.clickonDay} id="num-box" className="num-box dead_month_color">
                        <div className="weekday"><span className="num-date"></span></div>
                        <div className="main-info"></div>
                        <div className="date-value"></div>
                        <div onClick={this.closeDay} className="close-day entypo-down-open"></div>
                    </div>
                    <div onClick={this.clickonDay} id="num-box" className="num-box dead_month_color">
                        <div className="weekday"><span className="num-date"></span></div>
                        <div className="main-info"></div>
                        <div className="date-value"></div>
                        <div onClick={this.closeDay} className="close-day entypo-down-open"></div>
                    </div>
                    <div onClick={this.clickonDay} id="num-box" className="num-box dead_month_color">
                        <div className="weekday"><span className="num-date"></span></div>
                        <div className="main-info"></div>
                        <div className="date-value"></div>
                        <div onClick={this.closeDay} className="close-day entypo-down-open"></div>
                    </div>
                    <div onClick={this.clickonDay} id="num-box" className="num-box dead_month_color">
                        <div className="weekday"><span className="num-date"></span></div>
                        <div className="main-info"></div>
                        <div classv="date-value"></div>
                        <div onClick={this.closeDay} className="close-day entypo-down-open"></div>
                    </div>
                </div>

                <div className="days">
                    <div onClick={this.clickonDay} id="num-box" className="num-box dead_month_color">
                        <div className="weekday"><span className="num-date"></span></div>
                        <div className="main-info"></div>
                        <div className="date-value"></div>
                        <div onClick={this.closeDay} className="close-day entypo-down-open"></div>
                    </div>
                    <div onClick={this.clickonDay} id="num-box" className="num-box dead_month_color">
                        <div className="weekday"><span className="num-date"></span></div>
                        <div className="main-info"></div>
                        <div className="date-value"></div>
                        <div onClick={this.closeDay} className="close-day entypo-down-open"></div>
                    </div>
                    <div onClick={this.clickonDay} id="num-box" className="num-box dead_month_color">
                        <div className="weekday"><span className="num-date"></span></div>
                        <div className="main-info"></div>
                        <div className="date-value"></div>
                        <div onClick={this.closeDay} className="close-day entypo-down-open"></div>
                    </div>
                    <div onClick={this.clickonDay} id="num-box" className="num-box dead_month_color">
                        <div className="weekday"><span className="num-date"></span></div>
                        <div className="main-info"></div>
                        <div className="date-value"></div>
                        <div onClick={this.closeDay} className="close-day entypo-down-open"></div>
                    </div>
                    <div onClick={this.clickonDay} id="num-box" className="num-box dead_month_color">
                        <div className="weekday"><span className="num-date"></span></div>
                        <div className="main-info"></div>
                        <div className="date-value"></div>
                        <div onClick={this.closeDay} className="close-day entypo-down-open"></div>
                    </div>
                    <div onClick={this.clickonDay} id="num-box" className="num-box dead_month_color">
                        <div className="weekday"><span className="num-date"></span></div>
                        <div className="main-info"></div>
                        <div className="date-value"></div>
                        <div onClick={this.closeDay} className="close-day entypo-down-open"></div>
                    </div>
                    <div onClick={this.clickonDay} id="num-box" className="num-box dead_month_color">
                        <div className="weekday"><span className="num-date"></span></div>
                        <div className="main-info"></div>
                        <div className="date-value"></div>
                        <div onClick={this.closeDay} className="close-day entypo-down-open"></div>
                    </div>
                </div>

                <div className="days">
                    <div onClick={this.clickonDay} id="num-box" className="num-box dead_month_color">
                        <div className="weekday"><span className="num-date"></span></div>
                        <div className="main-info"></div>
                        <div className="date-value"></div>
                        <div onClick={this.closeDay} className="close-day entypo-down-open"></div>
                    </div>
                    <div onClick={this.clickonDay} id="num-box" className="num-box dead_month_color">
                        <div className="weekday"><span className="num-date"></span></div>
                        <div className="main-info"></div>
                        <div className="date-value"></div>
                        <div onClick={this.closeDay} className="close-day entypo-down-open"></div>
                    </div>
                    <div onClick={this.clickonDay} id="num-box" className="num-box dead_month_color">
                        <div className="weekday"><span className="num-date"></span></div>
                        <div className="main-info"></div>
                        <div className="date-value"></div>
                        <div onClick={this.closeDay} className="close-day entypo-down-open"></div>
                    </div>
                    <div onClick={this.clickonDay} id="num-box" className="num-box dead_month_color">
                        <div className="weekday"><span className="num-date"></span></div>
                        <div className="main-info"></div>
                        <div className="date-value"></div>
                        <div onClick={this.closeDay} className="close-day entypo-down-open"></div>
                    </div>
                    <div onClick={this.clickonDay} id="num-box" className="num-box dead_month_color">
                        <div className="weekday"><span className="num-date"></span></div>
                        <div className="main-info"></div>
                        <div className="date-value"></div>
                        <div onClick={this.closeDay} className="close-day entypo-down-open"></div>
                    </div>
                    <div onClick={this.clickonDay} id="num-box" className="num-box dead_month_color">
                        <div className="weekday"><span className="num-date"></span></div>
                        <div className="main-info"></div>
                        <div className="date-value"></div>
                        <div onClick={this.closeDay} className="close-day entypo-down-open"></div>
                    </div>
                    <div onClick={this.clickonDay} id="num-box" className="num-box dead_month_color">
                        <div className="weekday"><span className="num-date"></span></div>
                        <div className="main-info"></div>
                        <div className="date-value"></div>
                        <div onClick={this.closeDay} className="close-day entypo-down-open"></div>
                    </div>
                </div>

                <div className="days">
                    <div onClick={this.clickonDay} id="num-box" className="num-box dead_month_color">
                        <div className="weekday"><span className="num-date"></span></div>
                        <div className="main-info"></div>
                        <div className="date-value"></div>
                        <div onClick={this.closeDay} className="close-day entypo-down-open"></div>
                    </div>
                    <div onClick={this.clickonDay} id="num-box" className="num-box dead_month_color">
                        <div className="weekday"><span className="num-date"></span></div>
                        <div className="main-info"></div>
                        <div className="date-value"></div>
                        <div onClick={this.closeDay} className="close-day entypo-down-open"></div>
                    </div>
                    <div onClick={this.clickonDay} id="num-box" className="num-box dead_month_color">
                        <div className="weekday"><span className="num-date"></span></div>
                        <div className="main-info"></div>
                        <div className="date-value"></div>
                        <div onClick={this.closeDay} className="close-day entypo-down-open"></div>
                    </div>
                    <div onClick={this.clickonDay} id="num-box" className="num-box dead_month_color">
                        <div className="weekday"><span className="num-date"></span></div>
                        <div className="main-info"></div>
                        <div className="date-value"></div>
                        <div onClick={this.closeDay} className="close-day entypo-down-open"></div>
                    </div>
                    <div onClick={this.clickonDay} id="num-box" className="num-box dead_month_color">
                        <div className="weekday"><span className="num-date"></span></div>
                        <div className="main-info"></div>
                        <div className="date-value"></div>
                        <div onClick={this.closeDay} className="close-day entypo-down-open"></div>
                    </div>
                    <div onClick={this.clickonDay} id="num-box" className="num-box dead_month_color">
                        <div className="weekday"><span className="num-date"></span></div>
                        <div className="main-info"></div>
                        <div className="date-value"></div>
                        <div onClick={this.closeDay} className="close-day entypo-down-open"></div>
                    </div>
                    <div onClick={this.clickonDay} id="num-box" className="num-box dead_month_color">
                        <div className="weekday"><span className="num-date"></span></div>
                        <div className="main-info"></div>
                        <div className="date-value"></div>
                        <div onClick={this.closeDay} className="close-day entypo-down-open"></div>
                    </div>
                </div>

                <div className="days">
                    <div onClick={this.clickonDay} id="num-box" className="num-box dead_month_color">
                        <div className="weekday"><span className="num-date"></span></div>
                        <div className="main-info"></div>
                        <div className="date-value"></div>
                        <div onClick={this.closeDay} className="close-day entypo-down-open"></div>
                    </div>
                    <div onClick={this.clickonDay} id="num-box" className="num-box dead_month_color">
                        <div className="weekday"><span className="num-date"></span></div>
                        <div className="main-info"></div>
                        <div className="date-value"></div>
                        <div onClick={this.closeDay} className="close-day entypo-down-open"></div>
                    </div>
                    <div onClick={this.clickonDay} id="num-box" className="num-box dead_month_color">
                        <div className="weekday"><span className="num-date"></span></div>
                        <div className="main-info"></div>
                        <div className="date-value"></div>
                        <div onClick={this.closeDay} className="close-day entypo-down-open"></div>
                    </div>
                    <div onClick={this.clickonDay} id="num-box" className="num-box dead_month_color">
                        <div className="weekday"><span className="num-date"></span></div>
                        <div className="main-info"></div>
                        <div className="date-value"></div>
                        <div onClick={this.closeDay} className="close-day entypo-down-open"></div>
                    </div>
                    <div onClick={this.clickonDay} id="num-box" className="num-box dead_month_color">
                        <div className="weekday"><span className="num-date"></span></div>
                        <div className="main-info"></div>
                        <div className="date-value"></div>
                        <div onClick={this.closeDay} className="close-day entypo-down-open"></div>
                    </div>
                    <div onClick={this.clickonDay} id="num-box" className="num-box dead_month_color">
                        <div className="weekday"><span className="num-date"></span></div>
                        <div className="main-info"></div>
                        <div className="date-value"></div>
                        <div onClick={this.closeDay} className="close-day entypo-down-open"></div>
                    </div>
                    <div onClick={this.clickonDay} id="num-box" className="num-box dead_month_color">
                        <div className="weekday"><span className="num-date"></span></div>
                        <div className="main-info"></div>
                        <div className="date-value"></div>
                        <div onClick={this.closeDay} className="close-day entypo-down-open"></div>
                    </div>
                </div>

                <div className="days">
                    <div onClick={this.clickonDay} id="num-box" className="num-box dead_month_color">
                        <div className="weekday"><span className="num-date"></span></div>
                        <div className="main-info"></div>
                        <div className="date-value"></div>
                        <div onClick={this.closeDay} className="close-day entypo-down-open"></div>
                    </div>
                    <div onClick={this.clickonDay} id="num-box" className="num-box dead_month_color">
                        <div className="weekday"><span className="num-date"></span></div>
                        <div className="main-info"></div>
                        <div className="date-value"></div>
                        <div onClick={this.closeDay} className="close-day entypo-down-open"></div>
                    </div>
                    <div onClick={this.clickonDay} id="num-box" className="num-box dead_month_color">
                        <div className="weekday"><span className="num-date"></span></div>
                        <div className="main-info"></div>
                        <div className="date-value"></div>
                        <div onClick={this.closeDay} className="close-day entypo-down-open"></div>
                    </div>
                    <div onClick={this.clickonDay} id="num-box" className="num-box dead_month_color">
                        <div className="weekday"><span className="num-date"></span></div>
                        <div className="main-info"></div>
                        <div className="date-value"></div>
                        <div onClick={this.closeDay} className="close-day entypo-down-open"></div>
                    </div>
                    <div onClick={this.clickonDay} id="num-box" className="num-box dead_month_color">
                        <div className="weekday"><span className="num-date"></span></div>
                        <div className="main-info"></div>
                        <div className="date-value"></div>
                        <div onClick={this.closeDay} className="close-day entypo-down-open"></div>
                    </div>
                    <div onClick={this.clickonDay} id="num-box" className="num-box dead_month_color">
                        <div className="weekday"><span className="num-date"></span></div>
                        <div className="main-info"></div>
                        <div className="date-value"></div>
                        <div onClick={this.closeDay} className="close-day entypo-down-open"></div>
                    </div>
                    <div onClick={this.clickonDay} id="num-box" className="num-box dead_month_color">
                        <div className="weekday"><span className="num-date"></span></div>
                        <div className="main-info"></div>
                        <div className="date-value"></div>
                        <div onClick={this.closeDay} className="close-day entypo-down-open"></div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Calendar_main;