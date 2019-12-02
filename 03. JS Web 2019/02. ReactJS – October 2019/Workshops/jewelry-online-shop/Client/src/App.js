import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navigation from './Navigation';
import Footer from './Footer';
import Main from './Main';


import styles from './App.module.css';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <div className="main-container">
        <Switch>
          <Route exact path='/' componenet={Main} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
