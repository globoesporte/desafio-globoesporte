
import React from 'react';
import logo from '../../images/logo.png';
import './Header.css'

export default props => {
  return (
    <header className='c-header'>
      <img className='c-header__logo' alt='logo' src={logo}/>
      <div className='c-header__time'>
        <h1 className='c-header__number'>12</h1>
        <div className='c-header__info'>
          <h3 className='c-header__day'>Terça</h3>
          <h3 className='c-header__month'>Jan</h3>
          <h3 className='c-header__year'>2017</h3>
        </div>
      </div>
    </header>
  )
}  

