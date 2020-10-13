import React from 'react'
import './Main.scss'

import {Route, Switch} from 'react-router-dom';
import { 
  NavBar, 
  Home, 

  ShowGlassCover,
  ShowPhone, 
  ShowProdGlassCover, 

  ShowBrasletsStraps, 
  ShowLogoStraps,
  ShowStraps,
  ShowBraslets,
  ShowProdBrasletsStraps,

  showPowerBank, 
  showAdapterCable, 
  showChargingDevice, 
  showHeadphones, 
  showHolders, 
  showAccumulators, 
  showBags, 
  showOthers, 
   } from './';


function Main() {

const [phones, setPhones] = React.useState([]);

React.useEffect(() => {
  fetch('http://localhost:3000/dbCoverGlass.json')
    .then((resp) => resp.json())
    .then((json) => {
      setPhones(json.glassCover);
  });
}, []);

const [braslets, setBraslets] = React.useState([]);

React.useEffect(() => {
  fetch('http://localhost:3000/dbBrasletsStraps.json')
    .then((resp) => resp.json())
    .then((json) => {
      setBraslets(json.brasletsStraps);
  });
}, []);

  return (
    <div className='main'>
        <NavBar />
        <div className="main__content">
          <Switch>
            <Route path='/' exact component={Home} />

            <Route path='/glassCover' render={() => <ShowGlassCover items={phones}/>} />
              <Route path='/phoneModels' component={ShowPhone} />
                <Route path='/prodGlassCover' component={ShowProdGlassCover} />

            <Route path='/brasletsStraps' render={() => <ShowBrasletsStraps items={braslets}/>} />
              <Route path='/straps' component={ShowLogoStraps}/>
                <Route path='/strapsModel' component={ShowStraps}/>
              <Route path='/braslets' component={ShowBraslets}/>
                <Route path='/prodBrasletsStraps' component={ShowProdBrasletsStraps}/>

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
