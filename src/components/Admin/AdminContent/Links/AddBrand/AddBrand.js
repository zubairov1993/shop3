import React from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom';
import './AddBrand.scss'


function AddBrand() {
  const [lists, setLists] = React.useState(null);
  const [inputValue, setInputValue] = React.useState('');
  const [inputImage, setInputImage] = React.useState('');
  const [visiblePopup, setVisiblePopup] = React.useState(false);

  const onClose = () => {
    setVisiblePopup(false);
    setInputValue('');
    setInputImage('');
  }

  React.useEffect(() => {
    axios.get('http://localhost:3002/brand')
      .then(({data}) => {
        setLists(data)
    })
  }, [setLists]);

  const onAddList = (obj) => {
    const newList = [
      ...lists,
      obj
    ];
    setLists(newList);
  }

  const addList = () => {
    axios.post('http://localhost:3002/brand', {"model": inputValue, "image": inputImage}).then(({data}) => {
      onAddList(data)
      onClose()
    })
  }

  const removeList = (item) => {
    if(window.confirm('Вы точно хотите удалить?')) {
      axios.delete('http://localhost:3002/brand/' + item.id).then(() => {
        onRemove(item.id)
    }) 
    }
  }

  const onRemove = (id) => {
    const newList = lists.filter(item => item.id !== id);
    setLists(newList)
  }

  return (
    <div>
      {lists ? (
        <div className='brand' >
          {
            lists.map((item, index) => {
              return (
                <div className="brand__block" key={index}>
                  <Link to={{ 
                    pathname: '/admin/addModel',
                    state: {data: item}
                  }} 
                    className='brand__block-item' 
                    >
                    <p>{item.model}</p>
                    
                  </Link>
                  <button 
                    onClick={() => removeList(item)}
                    className='brand__block-close'>&times;
                  </button>
                </div>
              )
            })
          }
          <div className='add-list'>
            <button onClick={() => setVisiblePopup(true)}>Add</button>
            {visiblePopup && <div className="add-list__popup">
              <button 
                className="add-list__popup-close"
                onClick={onClose}
              >&times;</button>
              <input 
                value={inputValue}
                onChange={e => setInputValue(e.target.value)} 
                className="field" 
                type="text" 
                placeholder="Название папки"/>
              <input 
                value={inputImage}
                onChange={e => setInputImage(e.target.value)} 
                className="field" 
                type="text" 
                placeholder="Url image"/>
              <button onClick={addList} className="button">Add Folder</button>
            </div>}
          </div>
        </div>
      ) : (
        'Loading...'
      )
    }
    </div>
  )
}

export default AddBrand
