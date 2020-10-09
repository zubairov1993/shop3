import React from 'react';
class ShowProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: this.props.location.state.data
    }
  }

  render() {
    const products = this.state.products;
    const elem = products.map(el => {
      return (
      <p>{el.name}</p>
      )
    })
    // console.log(itemPhones);
    return (
      <div>
        {elem}
      </div>
    )
  }
}

export default ShowProducts;