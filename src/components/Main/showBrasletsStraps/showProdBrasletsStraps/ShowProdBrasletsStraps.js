import React from 'react';


class ShowProdBrasletsStraps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.location.state.data
    }
  }

  render() {
    const data = this.state.data;
    const elem = data.map(el => {
      return (
      <div key={el.id}>
        <img src={el.image} alt={el.name}/>
        <p>{el.name}</p>
      </div>
      )
    })
    return (
      <div>
        {elem}
      </div>
    )
  }
}

export default ShowProdBrasletsStraps;