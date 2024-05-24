import React from 'react'
import './NavBar.css'
import ttlogo from '../../src/assets/ttlogo.png'


function NavBar() {
  return (
    <nav className='container'>
        <img src={ttlogo} alt="" className='logo' />
        <ul>
            <li> <button></button>
                HOME                
            </li>
            <li>
                COURSES                
            </li>
            <li>
                TESTIMONIALS                
            </li>
            <li>
                ABOUT US                
            </li>
            <li>
                CONTACT US              
            </li>
            <li><button className='btn'>PRICING</button>
                                
            </li>
        </ul>
    </nav>
  )
}

export default NavBar
