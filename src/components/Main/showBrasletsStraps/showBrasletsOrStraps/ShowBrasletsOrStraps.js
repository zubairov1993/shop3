import React, { Component } from 'react';
import './ShowBrasletsOrStraps.scss'
import { Link } from 'react-router-dom';

class ShowBrasletOrStraps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props
    }
  }

  render() {
    return (
      <Link to={{ 
        pathname: `/${this.state.data.name}`,
        state: { data: this.state.data }
      }}
      key={this.state.data.id}
      >
        <div className='logo-braslets'>
          <img src={this.state.data.image} alt={this.state.data.model}/>
          <p>{this.state.data.name}</p>
        </div>
        
      </Link>
    );
  }
}
export default ShowBrasletOrStraps;