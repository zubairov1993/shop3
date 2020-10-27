import React from 'react';
import BrasletOrStraps from './BrasletsOrStraps/BrasletsOrStraps';
import './BrasletsStraps.scss';

function BrasletsStraps({ items }) {
  return (
    <div className='braslets'>
      {
        items.map(obj => <BrasletOrStraps key={obj.id} {...obj}/>)
      }
    </div>
  )
}

export default BrasletsStraps
