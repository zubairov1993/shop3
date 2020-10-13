import React from 'react';
import ShowBrasletOrStraps from './showBrasletsOrStraps/ShowBrasletsOrStraps';
import './ShowBrasletsStraps.scss';
// import ShowLogoBrasletsStraps from './showLogoBrasletsStraps/ShowLogoBrasletsStraps'

function ShowBrasletsStraps({ items }) {
  return (
    <div className='braslets'>
      {
        items.map(obj => <ShowBrasletOrStraps key={obj.id} {...obj}/>)
      }
    </div>
  )
}

export default ShowBrasletsStraps
