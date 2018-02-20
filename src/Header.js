import React, { Component } from 'react';

class Header extends Component {
    constructor() {
        super();

        let weekDays =  ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

        let today = new Date(), locale = "pt-br";
        
        this.state = {
            day: today.getDate(),
            year: today.getFullYear(),
            month: today.toLocaleString(locale, { month: "short" }),
            weekDay: weekDays[today.getDay()]
        };
    }

	render() {
		return (
			<div className="Header">
    				 <div className="Header_title">ge</div>
    				 <div className="Header_calendar">
    				 	<div className="Header_day"> {this.state.day} </div>
    				 	<div className="Header_weekDay"> {this.state.weekDay} </div>
    				 	<div className="Header_month"> {this.state.month} </div>
    				 	<div className="Header_year"> {this.state.year} </div>
    				 </div> 
            </div>
		)
	}
}

export default Header;

