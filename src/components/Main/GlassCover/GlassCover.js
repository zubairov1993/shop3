import React from 'react';
import './GlassCover.scss';
import LogoPhone from './LogoPhone/LogoPhone';

function GlassCover({ items }) {
  return (
    <div className='glass'>
        {
          items.map(obj => <LogoPhone key={obj.id} {...obj}/>)
        }
    </div>
  )
}

export default GlassCover
