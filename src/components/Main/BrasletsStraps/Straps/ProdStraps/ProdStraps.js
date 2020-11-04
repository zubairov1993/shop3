import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

import './ProdStraps.scss'

function ProdStraps(props) {
  const [lists, setLists] = React.useState(null);

  const modelName = props.location.state.data.model;

  React.useEffect(() => {
    axios.get('http://localhost:3001/products')
      .then(({data}) => {
        const result = data.filter(item => item.modelName == modelName)
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
                <div key={index} className='products-show__item'>
                  <img src={item.image} alt="image"/>
                  <p>{item.name}</p>
                  <p>{item.color}</p>
                  <p>{item.description}</p>
                  <p>{item.counter}</p>
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

export default ProdStraps;
