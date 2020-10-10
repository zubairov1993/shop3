import React from 'react';
import { Link } from 'react-router-dom';
import './ShowLogoPhone.scss';

 class ShowLogoPhone extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      data: this.props
    }

  }

  render() {
    
    return (
      <Link to={{ 
        pathname: '/phoneModels',
        state: { data: this.state.data }
      }} 
        className='logo-phone' >
        <img src={this.state.data.image} alt={this.state.data.model}/>
      </Link>
    )
  }
}

export default ShowLogoPhone;