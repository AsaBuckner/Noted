import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import Login from './components/Login'
import './index.css'

export function App() {
  return (
    <div className='Wrapper'>

      <Router>
        <Switch>
          <Route strict path={'/'} component={Home}/>
          <Route path={'/Login'} component={Login}/>
        </Switch>
      </Router>


    </div>
  );
}

