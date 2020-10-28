import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


 function FakeProdGlassCover(props) {
  const modelName = props.location.state.data.model;

  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://localhost:3002/products')
        .then(({data}) => {
          const result = data.filter(item => item.modelName == modelName)
          setProducts(result)
      })
  }, []);

  return (
    <div>
      {products ? (
        <div>
          {
            products.map((item, index) => (
              <p key={index}>{item.name}</p>
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


export default FakeProdGlassCover;