import React from 'react'
import './SideBar.scss'

import DB from '../../../assets/dataBase.json'

function SideBar() {
  return (
    <div className='sidebar'>
      <ul>
        {
          DB.dataBase.values(item => console.log(item))
        }
      </ul>
    </div>
  )
}

export default SideBar
