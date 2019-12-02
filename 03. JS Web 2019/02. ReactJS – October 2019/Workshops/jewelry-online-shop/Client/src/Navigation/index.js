import React from 'react';
import styles from './Navigation.module.css';
 

function Navigation() {
    return (
        <nav className={styles.Navigation}>
            <div className={styles.logo}>Gewerly Store</div>
            <div className={styles['main-section']}>
                <ul>
                    <li><a href="#">Login</a></li>
                    <li><a href="#">Register</a></li>
                    <li><a href="#">Products</a>
                        <ul >
                            <li><a href="#">Sub-1</a></li>
                            <li><a href="#">Sub-2</a></li>
                            <li><a href="#">Sub-3</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Cart</a></li>
                    <li><a href="#">About</a></li>
                </ul>

            </div>
            <div className={styles.search}>
              <input type="text"></input>
            </div>
        </nav>
    )
}

export default Navigation;