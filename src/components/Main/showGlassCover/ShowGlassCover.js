// import React from 'react';
// import {PizzaBlock} from '..';
// import './ShowGlassCover.scss';

// function ShowGlassCover({ items }) {
//   return (
//     <div className='glass'>
//       {/* <h1>showGlassCover</h1> */}
//       {
//         items.map(obj => <PizzaBlock key={obj.id} {...obj}  />)
//       }
//     </div>
//   )
// }

// export default ShowGlassCover

// import {Link, Route, Switch} from 'react-router-dom';

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
