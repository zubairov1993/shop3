import React from 'react';


class ShowProdBrasletsWathes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: this.props.location.state.data
    }
    // console.log(this.state.products);
  }

  render() {
    const products = this.state.products;
    const elem = products.map(el => {
      return (
      <p key={el.id}>{el.name}</p>
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

export default ShowProdBrasletsWathes;