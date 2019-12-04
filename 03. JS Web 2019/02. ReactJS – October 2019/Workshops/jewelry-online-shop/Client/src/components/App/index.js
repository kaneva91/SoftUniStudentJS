import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navigation from '../Navigation';
import Footer from '../Footer';
import Main from '../Main';
import Register from '../Register';
import Login from '../Login';


import styles from './App.module.css';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <div className="main-container">
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path="/register" component={Register} />
          <Route  path='/login' component={Login} />
          <Route  path='/about' component={Main} />
          <Route  path='/cart' component={Main} />
          <Route  path='/profile' component={Main} />
          <Route  path='/*' component={Main} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
