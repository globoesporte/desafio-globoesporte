import React from 'react';

export const Header = () => (
  <header className="header x">
    <h2 className="header__title x no-margin">GE</h2>
    <section className="header__time x">
      <h2 className="header__time__day no-margin x">12</h2>
      <div className="header__time__more-info x">
        <p className="header__time__more-info__day-week no-margin x">Terça</p>
        <small className="header__time__more-info__month-year x">JAN 2017</small>
      </div>
    </section>
  </header>
);
