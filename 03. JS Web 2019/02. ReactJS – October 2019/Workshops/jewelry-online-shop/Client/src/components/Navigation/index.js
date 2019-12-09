import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../ContextWrapper';

import styles from './Navigation.module.css';


function Navigation() {
   const [user] = useContext(UserContext);
   console.log(user)

    return (
     
        <nav className={styles.Navigation}>
            <div className={styles.logo}>Gewerly Store</div>
            <div className={styles['main-section']}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><a href="#">Products</a>
                        <ul >
                            <li> <Link to="/">Bracelets</Link></li>
                            <li> <Link to="/">Earings</Link></li>
                            <li> <Link to="/">Keychains</Link></li>
                        </ul>
                    </li>
                    {user.loggedIn ?
                        <frameElement>
                            <li><Link to="/cart">Cart</Link></li>
                            <li><Link to="/profile">Profile</Link></li>
                            <li><Link to="/logout">Logout</Link></li>
                        </frameElement>
                        :
                        <Fragment>
                            <li> <Link to="/login">Login</Link></li>
                            <li><Link to="/register">Register</Link></li>
                        </Fragment>}
                    <li><Link to="/about">About</Link></li>
                </ul>

            </div>
            <div className={styles.search}>
                <input type="text"></input>
            </div>
            <div className={styles.greating}>
                {!!user.name ? `Welcome ${user.name}`:' Welcome, Guest!'}</div>
        </nav>
       
    )
}

export default Navigation;