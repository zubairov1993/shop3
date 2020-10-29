import React from 'react'
import axios from 'axios'

import './AddProducts.scss'

function AddProducts(props) {
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
//// Получение
  React.useEffect(() => {
    axios.get('http://localhost:3002/products')
      .then(({data}) => {
        const result = data.filter(item => item.modelName == modelName)
        setLists(result)
    })
  }, [setLists]);
//// Получение

//// Добавление
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
//// Добавление

//// Удаление
  const removeList = (item) => {
    if(window.confirm('Вы точно хотите удалить?')) {
      axios.delete('http://localhost:3002/products/' + item.id).then(() => {
        onRemove(item.id)
    }) 
    }
  }

  const onRemove = (id) => {
    const newList = lists.filter(item => item.id !== id);
    setLists(newList)
  }
//// Удаление



//// Изменение image
  const onEditImage = (id, image) => {
    const newImage = lists.map(item => {
      if (item.id === id) {
        item.image = image;
      }
      return item;
    })
    setLists(newImage)
  }

  const editImage = (item) => {
    console.log(item.name);
    const newImage = window.prompt('Внесите изменения', item.image);
    if(newImage) {
      onEditImage(item.id, newImage)
      axios.patch('http://localhost:3002/products/' + item.id, {
        image: newImage
      }).catch(() => {
        alert('ERROR')
      })
    }
  }
//// Изменение image

//// Изменение name
  const onEditName = (id, name) => {
    const newName = lists.map(item => {
      if (item.id === id) {
        item.name = name;
      }
      return item;
    })
    setLists(newName)
  }

  const editName = (item) => {
    console.log(item.name);
    const newName = window.prompt('Внесите изменения', item.name);
    if(newName) {
      onEditName(item.id, newName)
      axios.patch('http://localhost:3002/products/' + item.id, {
        name: newName
      }).catch(() => {
        alert('ERROR')
      })
    }
  }
//// Изменение name

//// Изменение color
  const onEditColor = (id, color) => {
    const newColor = lists.map(item => {
      if (item.id === id) {
        item.color = color;
      }
      return item;
    })
    setLists(newColor)
  }

  const editColor = (item) => {
    console.log(item.name);
    const newColor = window.prompt('Внесите изменения', item.color);
    if(newColor) {
      onEditColor(item.id, newColor)
      axios.patch('http://localhost:3002/products/' + item.id, {
        color: newColor
      }).catch(() => {
        alert('ERROR')
      })
    }
  }
//// Изменение color

//// Изменение counter
  const onEditCounter = (id, counter) => {
    const newCounter = lists.map(item => {
      if (item.id === id) {
        item.counter = counter;
      }
      return item;
    })
    setLists(newCounter)
  }

  const editCounter = (item) => {
    console.log(item.name);
    const newCounter = window.prompt('Внесите изменения', item.counter);
    if(newCounter) {
      onEditCounter(item.id, newCounter)
      axios.patch('http://localhost:3002/products/' + item.id, {
        counter: newCounter
      }).catch(() => {
        alert('ERROR')
      })
    }
  }
//// Изменение counter

//// Изменение description
  const onEditDescr = (id, descr) => {
    const newDescr = lists.map(item => {
      if (item.id === id) {
        item.description = descr;
      }
      return item;
    })
    setLists(newDescr)
  }

  const editDescr = (item) => {
    console.log(item.name);
    const newDescr = window.prompt('Внесите изменения', item.description);
    if(newDescr) {
      onEditDescr(item.id, newDescr)
      axios.patch('http://localhost:3002/products/' + item.id, {
        description: newDescr
      }).catch(() => {
        alert('ERROR')
      })
    }
  }
//// Изменение description

  return (
    <div>
      {lists ? (
        <div className='products'>
          {
            lists.map((item, index) => {
              return (
                <div key={index} className='products__item'>
                  <p>Image: {item.image}<i onClick={() => editImage(item)} className="fas fa-pen"></i></p>
                  <p>{item.name}<i onClick={() => editName(item)} className="fas fa-pen"></i></p>
                  <p>{item.color}<i onClick={() => editColor(item)} className="fas fa-pen"></i></p>
                  <p>{item.counter}<i onClick={() => editCounter(item)} className="fas fa-pen"></i></p>
                  <p>{item.description}<i onClick={() => editDescr(item)} className="fas fa-pen"></i></p>
                  <button 
                    onClick={() => removeList(item)}
                    className='products__item-close'>&times;
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

export default AddProducts
