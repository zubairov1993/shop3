import React from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom';
import './AddBrand.scss'
import AddBtn from '../../AddBtn/AddBtn'


function AddBrand() {
  
  const [lists, setLists] = React.useState(null)

  React.useEffect(() => {
    axios.get('http://localhost:3001/glassCover').then(({data}) => {
      setLists(data)
    })
  }, []);

  const onAddList = (obj) => {
    const newList = [
      ...lists,
      obj
    ];
    setLists(newList);
    console.log(lists);
  }

  return (
    <div>
      {lists ? (
        <div className='model-phone'>
          {
            lists.map((item, index) => {
              return (
                <Link to={{ 
                  pathname: '/admin/addModel',
                  state: {data: item}
                }} 
                  className='model-phone__item' key={index}
                  >
                  <p>{item.model}</p>
                </Link>
              )
            })
          }
          <AddBtn onAddList={onAddList}/>
        </div>
      ) : (
        'Loading...'
      )
    }
    </div>
  )
}

export default AddBrand
