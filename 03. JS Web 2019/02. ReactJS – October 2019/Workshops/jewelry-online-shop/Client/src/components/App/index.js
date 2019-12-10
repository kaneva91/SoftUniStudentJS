import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { UserProvider } from '../ContextWrapper';

import Navigation from '../Navigation';
import Footer from '../Footer';
import Main from '../Main';
import Register from '../Register';
import Login from '../Login';
import Logout from '../Logout';
import CategoryPage from '../CategoryPage';

import styles from './App.module.css';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Navigation />
        <div className={styles['main-container']}>
          <Switch>
            <Route exact path='/' component={Main} />
            <Route path="/register" component={Register} />}
            <Route path='/login' component={Login} />
            <Route path='/about' component={Main} />
            <Route path='/cart' component={Main} />
            <Route path='/profile' component={Main} />
            <Route path='/logout' component={Logout} />
            <Route path='/bracelets' component={() => <CategoryPage categoryName={'Bracelets'} />} />
            <Route path='/earings' component={() => <CategoryPage categoryName={'Earings'} />} /> 
            <Route path='/keychains' component={() => <CategoryPage categoryName={'Keychains'} />} />
            <Route path='/*' component={Main} />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter >
    </UserProvider>

  )


}

export default App;
