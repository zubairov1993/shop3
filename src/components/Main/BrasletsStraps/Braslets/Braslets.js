import React from 'react';

 class Braslets extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      data: this.props.location.state.data
    }
  }
  
  render() {
    const data = this.state.data;
    const item = data.products;
    const elem = item.map(el => {
      return (
          <div className='logo-braslets' key={el.model}>
            <img src={el.image} alt={el.model}/>
            <p>{el.model}</p>
        </div>
      )
    })
    return (
      <div className='phone'>
        {elem}
      </div>
    )
  }
}


export default Braslets;