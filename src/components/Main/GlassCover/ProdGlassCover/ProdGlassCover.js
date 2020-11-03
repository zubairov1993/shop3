import React from 'react';
import axios from 'axios';

import './ProdGlassCover.scss';


 function ProdGlassCover(props) {
  const modelName = props.location.state.data.model;

  const [products, setProducts] = React.useState([]);
  console.log(products);
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
        <div className='products-show'>
          {
            products.map((item, index) => (
              <div key={index} className='products-show__item'>
                <img src={item.image} alt="image"/>
                <p>{item.name}</p>
                <p>{item.color}</p>
                <p>{item.description}</p>
                <p>{item.counter}</p>
              </div>
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


export default ProdGlassCover;