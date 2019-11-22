import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navigation from './Navigation';
import Main from './Main';
import Aside from './Aside';
import Footer from './Footer';

import Login from './Login';
import Register from './Register';
import Profile from './Profile';
import PostCreate from './publications/PostCreate';
import NotFound from './errors/NotFound';

import styles from './App.module.css';


function App() {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Navigation />
        <div className="Container">
          <Aside />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/create-post" component={PostCreate} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/profile" component={Profile} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;
