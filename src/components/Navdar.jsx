import React from 'react'
import home from '../assets/home.ico'
import contact from '../assets/contacto.ico'
import cake from '../assets/cake.ico'
import {Link} from 'react-router-dom'

export const Navdar = () => {
  return (
        <div className='navdar' >
                <div className='navdar'>
                    <img src={home} alt="logo de home" className='icon'/>
                    <Link to='/' className='optionNavdar'>  home</Link>
                    <img src={contact} alt="logo de contacto" className='icon'/>
                    <Link to='/contacto' className='optionNavdar'> contacto</Link>
                </div>
                <div className='endNavdar navdar'>
                    <p className='optionNavdar '> Happy Cake </p>
                    <img src={cake} alt="imagen de torta" className='icon2'/>
                </div>
        </div>
  )
}
