import React from 'react';
import axios from 'axios';

import './BrasletsStraps.scss'
import { Link } from 'react-router-dom';

function BrasletStraps() {

  const [lists, setLists] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://localhost:3001/nomination')
        .then(({data}) => {
          setLists(data)
      })
  }, []);

  return (
    <div className='braslets-or-straps'>
        {
          lists.map((item, index) => {
            return (
              <div className='braslets' key={index}>
                {item.nomin == 'watches' ? (
                  <div>
                    <Link to={{ 
                      pathname: '/braslets',
                      state: {data: item}
                    }} 
                      >
                      <img src={item.image} alt="image"/> 
                      <p>{item.nomin}</p>
                    </Link>
                  </div>
                ) : (
                  <div>
                    <Link to={{ 
                      pathname: '/straps',
                      state: {data: item}
                    }} 
                      >
                      <img src={item.image} alt="image"/> 
                      <p>{item.nomin}</p>
                    </Link>
                  </div>
                )}
              </div>
            )
          })
        }
    </div>
  )
}

export default BrasletStraps;