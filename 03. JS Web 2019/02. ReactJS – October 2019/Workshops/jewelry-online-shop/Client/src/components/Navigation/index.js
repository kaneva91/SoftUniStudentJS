import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Navigation.module.css';
 

function Navigation() {
    return (
        <nav className={styles.Navigation}>
            <div className={styles.logo}>Gewerly Store</div>
            <div className={styles['main-section']}>
                <ul>
                    <li> <Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><a href="#">Products</a>
                        <ul >
                            <li><a href="#">Sub-1</a></li>
                            <li><a href="#">Sub-2</a></li>
                            <li><a href="#">Sub-3</a></li>
                        </ul>
                    </li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>

            </div>
            <div className={styles.search}>
              <input type="text"></input>
            </div>
        </nav>
    )
}

export default Navigation;