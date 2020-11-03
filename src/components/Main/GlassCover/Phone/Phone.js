import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './Phone.scss';

 function Phone(props) {
  const brandName = props.location.state.data.model;

  const [models, setModels] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://localhost:3002/model')
        .then(({data}) => {
          const result = data.filter(item => item.brandName == brandName)
          setModels(result)
      })
  }, []);

  return (
    <div>
      {models ? (
        <div className='phone'>
          {
            models.map((item, index) => (
              <Link to={{ 
                pathname: '/prodGlassCover',
                state: { data: item }
              }} key={index}>
                <img src={item.image}></img>
                <p>{item.model}</p>
              </Link>
            ))
          }
        </div>
      ) : (
        'Loading...'
      )
    }
    </div>
  )
}


export default Phone;