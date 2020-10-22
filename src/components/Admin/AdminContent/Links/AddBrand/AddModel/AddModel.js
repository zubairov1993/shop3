import React from 'react'

import './AddModel.scss'
import { Link } from 'react-router-dom';

class AddModel extends React.Component {
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
          pathname: '/admin/addProducts',
          state: { data: el.products }
        }} key={el.id}
        className='phone__item'
        >
          <p>{el.model}</p>
        </Link>
      )
    })
    return (
      <div className='phone'>
        {elem}
      </div>
    )
  }
  
}

export default AddModel
