import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from '../Navigation';
import Footer from '../Footer';
import Main from '../Main';
import Register from '../Register';
import Login from '../Login';
import CategoryPage from '../CategoryPage';

import styles from './App.module.css';

class App extends Component {

  constructor (props){
    super(props)

      this.state={
        isLoggedIn : false
    }
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
      <BrowserRouter>
        <Navigation isLoggedIn={isLoggedIn}/>
        <div className={styles['main-container']}>
          <Switch>
            <Route exact path='/' component={Main} />
            <Route path="/register" component={Register} />}
            <Route path='/login' component={Login} />
            <Route path='/about' component={Main} />
            <Route path='/cart' component={Main} />
            <Route path='/profile' component={Main} />
            <Route path='/Logout' component={Main} />
            <Route path='/Bracelets' component={Main} />
            <Route path='/Earings' component={Main} />
            <Route path='/Keychains' component={CategoryPage}  categoryName ='Keychains'/>
            <Route path='/*' component={Main} />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter >
    )
  }

}

export default App;
