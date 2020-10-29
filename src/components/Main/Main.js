import React from 'react'
import './Main.scss'

import {Route, Switch} from 'react-router-dom';
import { 
  NavBar, 
  Home, 

  GlassCover,
  Phone, 
  ProdGlassCover, 

  BrasletsStraps, 
  LogoStraps,
  Straps,
  Braslets,
  ProdBrasletsStraps,

  PowerBank, 
  AdapterCable, 
  ChargingDevice, 
  Headphones, 
  Holders, 
  Accumulators, 
  Bags, 
  Others, 
   } from './';


function Main() {

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

            <Route path='/glassCover' component={GlassCover} />
              <Route path='/phoneModels' component={Phone} />
                <Route path='/prodGlassCover' component={ProdGlassCover} />

            <Route path='/brasletsStraps' render={() => <BrasletsStraps items={braslets}/>} />
              <Route path='/straps' component={LogoStraps}/>
                <Route path='/strapsModel' component={Straps}/>
              <Route path='/braslets' component={Braslets}/>
                <Route path='/prodBrasletsStraps' component={ProdBrasletsStraps}/>

            <Route path='/adapter' component={AdapterCable} />
            <Route path='/charging' component={ChargingDevice} />
            <Route path='/headphones' component={Headphones} />
            <Route path='/powerbank' component={PowerBank} />
            <Route path='/holders' component={Holders} />
            <Route path='/accum' component={Accumulators} />
            <Route path='/bags' component={Bags} />
            <Route path='/others' component={Others} />
          </Switch>
        </div>
    </div>
  )
}

export default Main
