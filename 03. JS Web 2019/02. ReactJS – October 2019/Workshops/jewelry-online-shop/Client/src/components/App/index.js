import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { UserProvider } from '../ContextWrapper';

import Navigation from '../Navigation';
import Footer from '../Footer';
import Main from '../Main';
import Register from '../user/Register';
import Login from '../user/Login';
import Logout from '../user/Logout';
import CategoryPage from '../products/CategoryPage';
import Details from '../products/Details';
import Profile from '../user/Profile';

import styles from './App.module.css';


function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Navigation />
        <div className={styles['main-container']}>
          <Switch>
            <Route exact path='/' exact component={Main} />
            <Route path="/register" exact component={Register} />}
            <Route path='/login' exact component={Login} />
            <Route path='/about' exact component={Main} />
            <Route path='/cart' exact component={Main} />
            <Route path='/profile' exact component={Profile} />
            <Route path='/logout' exact component={Logout} />
            <Route path='/bracelets' exact component={() => <CategoryPage categoryName={'bracelets'} />} />
            <Route path='/earings' exact component={() => <CategoryPage categoryName={'earings'} />} />
            <Route path='/keychains' exact component={() => <CategoryPage categoryName={'keychains'} />} />
            <Route path='/bracelets/:id' exact component={Details} />
            <Route path='/earings/:id' exact component={Details} />
            <Route path='/keychains/:id' exact component={Details} />
            <Route path='/*' component={Main} />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter >
    </UserProvider>

  )


}

export default App;
