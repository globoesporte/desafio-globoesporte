import React, {Component} from 'react';

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
        <svg className="header__logo x" version="1.1" viewBox="-10 -30 522 388" xmlns="http://www.w3.org/2000/svg">
          <path d="M188.795 31.62C163.158 6.516 144.633 0 116.093 0 49.828 0 0 56.265 0 131.582c0 74.384 47.894 127.283 114.163 127.283 30.47 0 48.525-5.483 72.222-31.98v6.512c0 25.575-1.927 35.328-10.154 47.42-11.132 15.34-36.43 25.106-58.69 25.106-16.922 0-36.76-4.183-54.177-13.48l-14.02-7.435c-4.846-2.326-10.163-3.728-14.505-3.728-14.52 0-28.06 12.556-28.06 26.5 0 25.575 52.71 50.22 107.858 50.22 40.644 0 81.428-13.482 103.2-37.192 20.32-21.857 29.504-49.75 29.504-89.73V26.044c0-13.95-13.553-25.1-30.48-25.1-15.48 0-28.064 11.15-28.064 25.1v5.577zM123.36 54.87c18.863 0 39.798 9.296 50.447 23.713 9.204 13.016 13.076 27.424 13.076 53 0 24.643-3.873 38.123-14.042 51.612-10.644 13.937-31.58 22.308-49.007 22.308-36.27 0-60.944-30.684-60.944-75.787 0-44.632 24.673-74.846 60.472-74.846zm358.166 93.344c22.243 0 30.474-6.97 30.474-26.494 0-26.037-13.548-59.878-31.936-81.265C458.304 14.42 424.834 0 389.514 0c-70.125 0-123.26 56.728-123.26 130.658 0 75.31 53.135 128.315 130.043 128.315 37.732 0 76.993-13.02 100.225-33.935 6.774-6.524 10.64-14.42 10.64-21.39 0-13.952-10.64-24.645-26.627-24.645-7.244 0-13.13 1.855-29.09 12.083-17.416 10.698-33.87 15.34-51.77 15.34-23.214 0-44.995-9.752-54.656-26.03-4.36-7.433-9.198-18.972-13.073-32.447l149.578.263zM390 49.134c31.445 0 50.792 20.763 58.048 61.668H330.993c6.76-39.976 28.048-61.667 59.008-61.667z" fill="#42c003" fillRule="evenodd"/>
        </svg>
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