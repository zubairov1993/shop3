import React from 'react'

import './SideBar.scss'

import DB from '../../../assets/dataBase.json'
import { Link } from 'react-router-dom'

function SideBar() {
  return (
    <div className='sidebar'>
      <ul>
        <li><Link to='/admin/addBrand'>Стекла и Чехлы</Link></li>
        <li><Link to='/admin/addBrasletsOrStraps'>браслеты и ремешки</Link></li>
        <li><Link to='/admin/addAdapter'>Кабеля и переходники</Link></li>
        <li><Link to='/admin/addCharging'>Зарядные устройства</Link></li>
        <li><Link to='/admin/addHeadphones'>Наушники</Link></li>
        <li><Link to='/admin/addPowerbank'>PowerBank</Link></li>
        <li><Link to='/admin/addHolders'>Держатели</Link></li>
        <li><Link to='/admin/addAccum'>Аккумуляторы</Link></li>
        <li><Link to='/admin/addBags'>Сумки</Link></li>
        <li><Link to='/admin/addOthers'>Прочее</Link></li>
      </ul>
    </div>
  )
}

export default SideBar
