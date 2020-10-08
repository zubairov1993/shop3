import React from 'react'
import './Main.scss'

import {Route, Switch} from 'react-router-dom';
import NavBar from './Nav/NavBar';
import { Home, ShowGlassCover, showBrasletsStraps, showPowerBank, showAdapterCable, showChargingDevice, 
  showHeadphones, showHolders, showAccumulators, showBags, showOthers } from './';
import ShowPhone from './showGlassCover/showPhone/ShowPhone';

function Main() {
  // const [pizzas, setPizzas] = React.useState([]);

// React.useEffect(() => {
//   fetch('http://localhost:3000/db.json')
//     .then((resp) => resp.json())
//     .then((json) => {
//       setPizzas(json.pizzas);
//   });
// }, []);

const [phones, setPhones] = React.useState([]);


React.useEffect(() => {
  fetch('http://localhost:3000/dataBase.json')
    .then((resp) => resp.json())
    .then((json) => {
      setPhones(json.glassCover);
  });
}, []);
// console.log(phones);
  const arr = phones.map(el => el.model)
console.log(arr);
  return (
    <div className='main'>
        <NavBar />
        <div className="main__content">
          <Switch>
            <Route path='/' exact component={Home} />
            {/* <Route path='/glass' render={() => <ShowGlassCover items={pizzas}/>} /> */}
            <Route path='/phone' render={() => <ShowPhone items={phones}/>} />
            <Route path='/glass' render={() => <ShowGlassCover items={phones}/>} />
            <Route path='/braslets' component={showBrasletsStraps} />
            <Route path='/adapter' component={showAdapterCable} />
            <Route path='/charging' component={showChargingDevice} />
            <Route path='/headphones' component={showHeadphones} />
            <Route path='/powerbank' component={showPowerBank} />
            <Route path='/holders' component={showHolders} />
            <Route path='/accum' component={showAccumulators} />
            <Route path='/bags' component={showBags} />
            <Route path='/others' component={showOthers} />
          </Switch>
        </div>
    </div>
  )
}

export default Main
