import React from 'react';

class Head extends React.Component {

    constructor() {
        super();

        var weekday = new Array(7);
        weekday[0] =  "Domingo";
        weekday[1] = "Segunda";
        weekday[2] = "Terça";
        weekday[3] = "Quarta";
        weekday[4] = "Quinta";
        weekday[5] = "Sexta";
        weekday[6] = "Sábdado";

        var today = new Date(),
            locale = "pt-br",
            month = today.toLocaleString(locale, { month: "short" }
        );
        
        this.state = {
            day: today.getDate(),
            year: today.getFullYear(),
            month,
            dayWeek: weekday[today.getDay()]
        };
    }

    render() {
        return (<div>
                <div className="divhead">
                    <img src="img/logo.png"/>
                </div>
                <div className="headdate">
                    <table>
                        <tbody>
                            <tr>
                                <td className="day" rowSpan="2">{this.state.day}</td>
                                <td className=" week">{this.state.dayWeek}</td>
                            </tr>
                            <tr>
                                <td className="yearmonth">{this.state.month} {this.state.year}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Head;