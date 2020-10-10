import React from 'react';
import './ShowPhone.scss';
import { Link } from 'react-router-dom';

 class ShowPhone extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      data: this.props.location.state.data
    }
  }
  
  render() {
    const data = this.state.data;
    const itemPhones = data.phones;
    const elem = itemPhones.map(el => {
      return (
        <Link to={{ 
          pathname: '/prodGlassCover',
          state: { data: el.products }
        }} key={el.id}>
          <img src={el.image}></img>
        </Link>
      )
    })
    // console.log(itemPhones);
    return (
      <div className='phone'>
        {elem}
      </div>
    )
  }
}


export default ShowPhone;