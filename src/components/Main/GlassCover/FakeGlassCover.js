import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


import './GlassCover.scss';

function FakeGlassCover() {

  const [phones, setPhones] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://localhost:3002/brand')
        .then(({data}) => {
          setPhones(data)
      })
  }, []);

  return (
    <div className='glass'>
        {
          phones.map((obj, index) => (
            <Link 
              to={{ pathname: '/phoneModels', state: { data: obj }}} 
              className='logo-phone' 
              key={index}
            >
              <img src={obj.image} alt={obj.model}/>
            </Link>
          ))
        }
    </div>
  )
}

export default FakeGlassCover
