import React from 'react';
import { Link } from 'react-router-dom';
import './LogoPhone.scss';

 class LogoPhone extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      data: this.props
    }
    console.log(this.state.data);
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

export default LogoPhone;