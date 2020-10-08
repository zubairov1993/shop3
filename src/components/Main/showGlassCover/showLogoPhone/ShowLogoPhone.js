import React from 'react';
import { Link } from 'react-router-dom';
import './ShowLogoPhone.scss';

export default function ShowLogoPhone({ image, model }) {
  
  return (
    <Link to='/phone' className='logo-phone'>
      <img src={image} alt={model}/>
    </Link>
  )
}
