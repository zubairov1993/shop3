import React, { Component } from 'react'
import AddBtnProd from './AddBtnProducts/AddBtnProd';

import './AddProducts.scss'

class AddProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: this.props.location.state.data
    }
    console.log(this.state.products);
  }

  onAddProd = (obj) => {
    const newList = [
      this.state.products.push(obj)
    ]
    this.setState({newList})
  }

  render() {
    const elem = this.state.products.map((el, index) => {
      return (
        <div key={index} className='products__item'>
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
        <AddBtnProd onAddProd={this.onAddProd}/>
      </div>
    )
  }
}

export default AddProducts