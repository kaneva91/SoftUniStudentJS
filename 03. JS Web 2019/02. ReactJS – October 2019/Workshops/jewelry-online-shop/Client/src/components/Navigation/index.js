import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../ContextWrapper';

import styles from './Navigation.module.css';


function Navigation() {
    const [user] = useContext(UserContext);
    return (
        <nav className={styles.Navigation}>
            <div className={styles.logo}>Gewerly Store</div>
            <div className={styles['main-section']}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><a href="#">Products</a>
                        <ul >
                            <li> <Link to="/bracelets">Bracelets</Link></li>
                            <li> <Link to="/earings">Earings</Link></li>
                            <li> <Link to="/keychains">Keychains</Link></li>
                        </ul>
                    </li>
                    {user.loggedIn ?
                        <Fragment>
                            <li><Link to="/cart">Cart</Link></li>
                            <li><Link to="/profile">Profile</Link></li>
                            <li><Link to="/logout">Logout</Link></li>
                        </Fragment>
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
                {!!user.name ? `Welcome ${user.name}` : ' Welcome, Guest!'}</div>
        </nav>

    )
}

export default Navigation;