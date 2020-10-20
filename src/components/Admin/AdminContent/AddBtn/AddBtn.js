import React from 'react'
import './AddBtn.scss'

function AddBtn({onAddList}) {
  const [inputValue, setInputValue] = React.useState('');
  const [inputImage, setInputImage] = React.useState('');
  const [visiblePopup, setVisiblePopup] = React.useState(false);

  const onClose = () => {
    setVisiblePopup(false);
    setInputValue('');
    setInputImage('');
  }

  const addList = () => {
    if(!inputValue) {
      alert('ВВедите название списка');
      return;
    }
    if(!inputImage) {
      alert('Вставте Url картинки');
      return;
    }
    onAddList({"model": inputValue, "image": inputImage});
    onClose();
  }

  return (
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
          // className="field" 
          type="text" 
          placeholder="Url image"/>
        <button onClick={addList} className="button">Add Folder</button>
      </div>}
    </div>
  )
}

export default AddBtn
