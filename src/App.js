import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import Login from './components/Login'
import Hub from './components/Hub'
import './index.css'

export function App() {
  return (
    <div className='Wrapper'>

      <Router>
        <Switch>
          <Route path={'/login'} component={Login}/>
          <Route path={'/Hub'} component={Hub}/>
          <Route path={'/'} component={Home}/>
        </Switch>
      </Router>


    </div>
  );
}

