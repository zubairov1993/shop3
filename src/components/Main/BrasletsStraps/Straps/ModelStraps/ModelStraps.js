import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

import './ModelStraps.scss'

function ModelStraps(props) {
  const [lists, setLists] = React.useState(null);

  const modelName = props.location.state.data.model;

  React.useEffect(() => {
    axios.get('http://localhost:3001/model')
      .then(({data}) => {
        const result = data.filter(item => item.brandName == modelName)
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
                    pathname: '/prodStraps',
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

export default ModelStraps
