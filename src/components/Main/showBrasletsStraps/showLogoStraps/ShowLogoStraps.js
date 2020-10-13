import React from 'react';
import './ShowLogoStraps.scss';
import { Link } from 'react-router-dom';

 class ShowLogoStraps extends React.Component {
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
        <Link to={{ 
          pathname: '/strapsModel',
          state: { data: el.products }
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


export default ShowLogoStraps;