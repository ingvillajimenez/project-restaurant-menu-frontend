import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NavbarRB from './components/NavbarRB';
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';
import Signup from './components/Signup';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <NavbarRB />
        <Switch>
          <Route path='/' exact component={ Home } />
          <Route path='/about' exact component={ About } />
          <PrivateRoute path='/profile' exact component={ Profile } />
          <PrivateRoute path='/dashboard' exact component={ Dashboard } />
          <Route path='/signup' exact component={ Signup } />
          <Route path='/login' exact component={ Login } />
        </Switch>
      </div>
    );
  }
}

export default App;
