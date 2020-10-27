import React from 'react'

import './AddModel.scss'
import { Link } from 'react-router-dom';
import AddBtnModel from './AddBtnModel/AddBtnModel';

class AddModel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.location.state.data
    }
    console.log(this.state.data);
  } 
  
  onAddModel = (obj) => {
    const newList = [
      this.state.data.phones.push(obj)
    ]
    this.setState({newList})
  }
  
  render() {

    const elem = this.state.data.phones.map((el, index) => {
      return (
        <Link to={{ 
          pathname: '/admin/addProducts',
          state: { data: el.products }
        }} key={index}
        className='phone__item'
        >
          <p>{el.model}</p>
        </Link>
      )
    })
    return (
      <div className='phone'>
        {elem}
        <AddBtnModel onAddModel={this.onAddModel}/>
      </div>
    )
  }
  
}

export default AddModel
