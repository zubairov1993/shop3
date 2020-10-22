import React, { Component } from 'react'

import './AddProducts.scss'

class AddProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: this.props.location.state.data
    }
  }

  render() {
    const products = this.state.products;
    console.log(products);
    const elem = products.map(el => {
      return (
        <div key={el.id} className='products__item'>
          <p>{el.name}</p>
          <p>{el.color}</p>
          <p>{el.counter}</p>
          <p>{el.description}</p>

        </div>
      )
    })
    return (
      <div className='products'>
        {elem}
      </div>
    )
  }
}

export default AddProducts