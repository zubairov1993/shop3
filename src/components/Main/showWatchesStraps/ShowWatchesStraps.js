import React from 'react';
import './ShowWatchesStraps.scss';
import ShowLogoWatchesStraps from './showLogoWatchesStraps/ShowLogoWatchesStraps'

function ShowWatchesStraps({ items}) {
  return (
    <div className='braslets'>
      {
        items.map(obj => <ShowLogoWatchesStraps key={obj.id} {...obj}/>)
      }
    </div>
  )
}

export default ShowWatchesStraps
