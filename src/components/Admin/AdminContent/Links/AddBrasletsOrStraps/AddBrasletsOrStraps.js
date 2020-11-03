import React from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom';
import './AddBrasletsOrStraps.scss'


function AddBrasletsOrStraps() {
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
    axios.get('http://localhost:3001/nomination')
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
    axios.post('http://localhost:3001/nomination', {"nomin": inputValue, "image": inputImage}).then(({data}) => {
      onAddList(data)
      onClose()
    })
  }

  const removeList = (item) => {
    if(window.confirm('Вы точно хотите удалить?')) {
      axios.delete('http://localhost:3001/nomination/' + item.id).then(() => {
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
        <div className='braslets' >
          {
            lists.map((item, index) => {
              return (
                <div key={index}>
                  {item.nomin == 'watches' ? (
                    <div className="braslets__block">
                      <Link to={{ 
                        pathname: '/admin/addBraslets',
                        state: {data: item}
                      }} 
                        className='braslets__block-item' 
                        >
                        <p>{item.nomin}</p>
                      </Link>
                      <button 
                        onClick={() => removeList(item)}
                        className='braslets__block-close'>&times;
                      </button>
                    </div>
                  ) : (
                    <div className="braslets__block">
                      <Link to={{ 
                        pathname: '/admin/addStraps',
                        state: {data: item}
                      }} 
                        className='braslets__block-item' 
                        >
                        <p>{item.nomin}</p>
                      </Link>
                      <button 
                        onClick={() => removeList(item)}
                        className='braslets__block-close'>&times;
                      </button>
                    </div>
                  )}
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

export default AddBrasletsOrStraps
