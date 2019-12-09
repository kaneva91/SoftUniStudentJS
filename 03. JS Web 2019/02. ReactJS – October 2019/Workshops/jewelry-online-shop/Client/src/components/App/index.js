import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


//import ContextWrapper from '../ContextWrapper';
import { UserProvider } from '../ContextWrapper';

import Navigation from '../Navigation';
import Footer from '../Footer';
import Main from '../Main';
import Register from '../Register';
import Login from '../Login';
import Logout from '../Logout';
import CategoryPage from '../CategoryPage';

import styles from './App.module.css';
import { isNoop } from '@babel/types';

function App() {



  return (
    <UserProvider>
      <BrowserRouter>
        <Navigation  />
        <div className={styles['main-container']}>
          <Switch>
            <Route exact path='/' component={Main} />
            <Route path="/register" component={Register} />}
            <Route path='/login' component={Login} />
            <Route path='/about' component={Main} />
            <Route path='/cart' component={Main} />
            <Route path='/profile' component={Main} />
            <Route path='/Logout' component={Logout} />
            <Route path='/Bracelets' component={Main} />
            <Route path='/Earings' component={Main} />
            <Route path='/Keychains' component={CategoryPage} />
            <Route path='/*' component={Main} />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter >
      </UserProvider> 
  
  )


}

export default App;
