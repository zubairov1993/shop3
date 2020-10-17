import React from 'react';
import { Route, Switch } from 'react-router';
import './App.scss';
import Admin from './components/Admin/Admin';

import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {

  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path='/admin' component={Admin} />
        <Route path='/' component={Main} />
      </Switch>
    </div>
  );
}

export default App;
