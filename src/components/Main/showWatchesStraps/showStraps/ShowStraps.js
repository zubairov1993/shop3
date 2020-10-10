import React from 'react';
import './ShowStraps.scss';
import { Link } from 'react-router-dom';

 class ShowWatchesStraps extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      data: this.props.location.state.data
    }
    // console.log(this.state.data);
  }
  
  render() {
    const data = this.state.data;
    const item = data.products;
    const elem = item.map(el => {
      console.log(el);
      return (
        <Link to={{ 
          pathname: '/prodWatchesStraps',
          state: { data: el.straps }
        }} key={el.model}>
          <div className='logo-braslets'>
            <img src={el.image} alt={el.model}/>
          <p>{el.model}</p>
        </div>
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


export default ShowWatchesStraps;