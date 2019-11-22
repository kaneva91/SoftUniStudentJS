import React from 'react';
import styles from './App.module.css';
import Navigation from './Navigation';
import Main from './Main';
import Aside from './Aside';
import Posts from './Posts';
import Footer from './Footer';


function App() {
  return (
    <div className={styles.App}>
      <Navigation />
      <div className="Container">
        <Aside />
        <Main />
        <Posts/>
      </div>
      <Footer />
    </div>
   
  );
}

export default App;
