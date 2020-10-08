import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom';
 


function Header() {
  return (
    <div className='header'>
      <Link to='/'>Shop</Link>
    </div>
  )
}

export default Header
