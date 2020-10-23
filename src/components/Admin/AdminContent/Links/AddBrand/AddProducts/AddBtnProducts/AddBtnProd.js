import React from 'react'
import axios from 'axios'

import './AddBtnProd.scss'

function AddBtnProd({onAddProd}) {
  const [inputValue, setInputValue] = React.useState('');
  const [inputImage, setInputImage] = React.useState('');
  const [inputColor, setInputColor] = React.useState('');
  const [inputDescr, setInputDescr] = React.useState('');
  const [inputCount, setInputCount] = React.useState('');
  const [visiblePopup, setVisiblePopup] = React.useState(false);

  const onClose = () => {
    setVisiblePopup(false);
    setInputValue('');
    setInputImage('');
  }

  const add = () => {
    onAddProd({
      "name": inputValue, 
      "image": inputImage, 
      "color": inputColor,
      "description": inputDescr,
      "counter": inputCount
    });
    onClose();
  }
  return (
    <div className='add-prod'>
      <button onClick={() => setVisiblePopup(true)}>Add</button>
      {visiblePopup && <div className="add-prod__popup">
        <button 
          className="add-prod__popup-close"
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
        <button onClick={add} className="button">Add Folder</button>
      </div>}
    </div>
  )
}

export default AddBtnProd
