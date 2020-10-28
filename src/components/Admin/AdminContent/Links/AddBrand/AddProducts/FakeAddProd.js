import React from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom';

function FakeAddProd(props) {
  const [lists, setLists] = React.useState(null);
  const [inputValue, setInputValue] = React.useState('');
  const [inputImage, setInputImage] = React.useState('');
  const [inputColor, setInputColor] = React.useState('');
  const [inputDescr, setInputDescr] = React.useState('');
  const [inputCount, setInputCount] = React.useState('');
  const [visiblePopup, setVisiblePopup] = React.useState(false);
  
  const modelName = props.location.state.data.model;

  const onClose = () => {
    setVisiblePopup(false);
    setInputValue('');
    setInputImage('');
  }

  React.useEffect(() => {
    axios.get('http://localhost:3002/products')
      .then(({data}) => {
        const result = data.filter(item => item.modelName == modelName)
        setLists(result)
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
    axios.post('http://localhost:3002/products', {
      "modelName" : modelName,
      "name": inputValue, 
      "image": inputImage, 
      "color": inputColor,
      "description": inputDescr,
      "counter": inputCount
    })
      .then(({data}) => {
        onAddList(data)
        onClose()
    })
  }

  return (
    <div>
      {lists ? (
        <div className='model-phone'>
          {
            lists.map((item, index) => {
              return (
                <div key={index} className='products__item'>
                  <p>{item.name}</p>
                  <p>{item.color}</p>
                  <p>{item.counter}</p>
                  <p>{item.description}</p>
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
                value={inputImage}
                onChange={e => setInputImage(e.target.value)} 
                type="text" 
                placeholder="Введите Url картинки"/>
              <input 
                value={inputValue}
                onChange={e => setInputValue(e.target.value)} 
                type="text" 
                placeholder="Введите название продукта"/>
              <input 
                value={inputColor}
                onChange={e => setInputColor(e.target.value)} 
                type="text" 
                placeholder="Введите цвет продукта"/>
              <input 
                value={inputDescr}
                onChange={e => setInputDescr(e.target.value)} 
                type="text" 
                placeholder="Введите описание продукта"/>
              <input 
                value={inputCount}
                onChange={e => setInputCount(e.target.value)} 
                type="text" 
                placeholder="Введите количество продукта"/>
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

export default FakeAddProd
