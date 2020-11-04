import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

import './Braslets.scss'

function Braslets(props) {
  const [lists, setLists] = React.useState(null);

  const nominName = props.location.state.data.nomin;

  React.useEffect(() => {
    axios.get('http://localhost:3001/brand')
      .then(({data}) => {
        const result = data.filter(item => item.nominName == nominName)
        setLists(result)
    })
  }, [setLists]);

  return (
    <div>
      {lists ? (
        <div className='phone'>
          {
            lists.map((item, index) => {
              return (
                <div className="phone__block" key={index}>
                  <Link to={{ 
                    pathname: '/prodBraslets',
                    state: {data: item}
                  }} 
                    className='phone__block-item'
                    >
                    <img src={item.image} alt="image"/>
                    <p>{item.model}</p>
                  </Link>
                </div>
              )
            })
          }
        </div>
      ) : (
        'Loading...'
      )
    }
    </div>
  )
}

export default Braslets
