import React from 'react'
import { Link } from 'react-router-dom';
import './AddBrand.scss'
import AddBtn from '../../AddBtn/AddBtn'
import DB from '../../../../../assets/dbCoverGlass.json'

function AddBrand() {
  const [lists, setLists] = React.useState(DB.glassCover)

  const onAddList = (obj) => {
    const newList = [
      ...lists,
      obj
    ];
    setLists(newList);
  }
  return (
    <div className='model-phone'>
        {
          lists.map((item, index) => {
            return (
              <Link to={{ 
                pathname: '/admin/addModel',
                state: {data: item}
              }} 
              className='model-phone__block' key={index}>
                <img src={item.image} alt={item.model}/>
              </Link>
            )
          })
        }
      <AddBtn onAddList={onAddList}/>

    </div>
  )
}

export default AddBrand
