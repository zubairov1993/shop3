import React from 'react'
import axios from 'axios'

import './AddBtnModel.scss'

function AddBtnModel({onAddModel}) {
  const [inputValue, setInputValue] = React.useState('');
  const [inputImage, setInputImage] = React.useState('');
  const [visiblePopup, setVisiblePopup] = React.useState(false);

  const onClose = () => {
    setVisiblePopup(false);
    setInputValue('');
    setInputImage('');
  }

  const add = () => {
    onAddModel({"model": inputValue, "image": inputImage, "products": []});
    onClose();
  }
  // const addList = () => {
  //   if(!inputValue) {
  //     alert('ВВедите название списка');
  //     return;
  //   }
  //   // if(!inputImage) {
  //   //   alert('Вставте Url картинки');
  //   //   return;
  //   // }
  //   onAddList({"model": inputValue, "image": inputImage});
  //   onClose();
  //   axios.post('http://localhost:3001/glassCover', {"model": inputValue, "image": inputImage}).then(({data}) => {
      
  //   })
  // }

  return (
    <div className='add-model'>
      <button onClick={() => setVisiblePopup(true)}>Add</button>
      {visiblePopup && <div className="add-model__popup">
        <button 
          className="add-model__popup-close"
          onClick={onClose}
        >&times;</button>
        <input 
          value={inputImage}
          onChange={e => setInputImage(e.target.value)} 
          className="field" 
          type="text" 
          placeholder="Введите Url картинки"/>
        <input 
          value={inputValue}
          onChange={e => setInputValue(e.target.value)} 
          className="field" 
          type="text" 
          placeholder="Введите название модели"/>
        <button onClick={add} className="button">Add Folder</button>
      </div>}
    </div>
  )
}

export default AddBtnModel
