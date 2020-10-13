import React from 'react';
import './ShowStraps.scss';
import { Link } from 'react-router-dom';

 class ShowStraps extends React.Component {
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
        <Link to={{ 
          pathname: '/prodBrasletsStraps',
          state: { data: el.straps }
        }} key={el.id}>
          <img src={el.image}></img>
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


export default ShowStraps;