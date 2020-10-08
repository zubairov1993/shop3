import React from 'react'
import {Link } from 'react-router-dom'
import './NavBar.scss'

function NavBar() {
  return (
    <div className='navbar'>
      <ul>
        <li><Link to='/glass'>Стекла и Чехлы</Link></li>
        <li><Link to='/braslets'>браслеты и ремешки</Link></li>
        <li><Link to='/adapter'>Кабеля и переходники</Link></li>
        <li><Link to='/charging'>Зарядные устройства</Link></li>
        <li><Link to='/headphones'>Наушники</Link></li>
        <li><Link to='/powerbank'>PowerBank</Link></li>
        <li><Link to='/holders'>Держатели</Link></li>
        <li><Link to='/accum'>Аккумуляторы</Link></li>
        <li><Link to='/bags'>Сумки</Link></li>
        <li><Link to='/others'>Прочее</Link></li>
      </ul>
      
    </div>
  )
}

export default NavBar
