import React from 'react';
import './ShowGlassCover.scss';
import ShowLogoPhone from './showLogoPhone/ShowLogoPhone';

function ShowGlassCover({ items }) {
  return (
    <div className='glass'>
        {
          items.map(obj => <ShowLogoPhone key={obj.id} {...obj}/>)
        }
    </div>
  )
}

export default ShowGlassCover
