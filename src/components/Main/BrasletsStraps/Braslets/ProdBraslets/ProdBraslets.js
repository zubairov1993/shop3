import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

import './ProdBraslets.scss'

function ProdBraslets(props) {
  const [lists, setLists] = React.useState(null);
  
  const nominName = props.location.state.data.nominName;

  React.useEffect(() => {
    axios.get('http://localhost:3001/products')
      .then(({data}) => {
        const result = data.filter(item => item.nominName == nominName )
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
                  <img src={item.image} alt="image"/>
                  <p>{item.model}</p>
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

export default ProdBraslets;
