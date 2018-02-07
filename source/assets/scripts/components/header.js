import React, { Component } from 'react';
import { ge } from '../components';

export class Header extends Component {

  state = {
    date: '',
    day: '',
    month: '',
    year: ''
  }

  componentWillMount() {
    this.setState({
      date: this.getDate().date,
      day: this.getDate().day,
      month: this.getDate().month.toUpperCase(),
      year: this.getDate().year
    });
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      3600000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  getDate = () => {
    const today = new Date(),
      date = today.getDate(),
      day = today.getDay(),
      month = today.getMonth(),
      year = today.getFullYear(),
      days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'],
      months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    return {
      date,
      day: days[day],
      month: months[month],
      year
    }
  }

  tick() {
    this.setState({
      date: this.getDate().date,
      day: this.getDate().day,
      month: this.getDate().month.toUpperCase(),
      year: this.getDate().year
    });
  }

  render () {
    return(
      <header className="header x">
        {ge}
        <section className="header__time x">
          <h2 className="header__time__day no-margin x">{this.state.date}</h2>
          <div className="header__time__more-info x">
            <p className="header__time__more-info__day-week no-margin x">{this.state.day}</p>
            <small 
              className="header__time__more-info__month-year x">{this.state.month} {this.state.year}</small>
          </div>
        </section>
      </header>
    );
  }
}