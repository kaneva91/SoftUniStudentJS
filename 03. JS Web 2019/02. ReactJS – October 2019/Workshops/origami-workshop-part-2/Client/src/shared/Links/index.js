import React, { Fragment } from 'react';
import styles from './Links.module.css'
import { Link } from 'react-router-dom';

function Links() {

    return(
    <Fragment>
            <li className={styles.listItem}><Link to="/create-post">Post</Link></li>
            <li className={styles.listItem}><Link to="/register">Register  </Link></li>
            <li className={styles.listItem}><Link to="/login">Login</Link></li>
            <li className={styles.listItem}><Link to="/Profile">Profile</Link></li>
            <li className={styles.listItem}><Link to="*">#######</Link></li>
            <li className={styles.listItem}><Link to="*">#######</Link></li>
            <li className={styles.listItem}><Link to="*">#######</Link></li>
            <li className={styles.listItem}><Link to="*">#######</Link></li>
            <li className={styles.listItem}><Link to="*">#######</Link></li>
            <li className={styles.listItem}><Link to="*">#######</Link></li>
            <li className={styles.listItem}><Link to="*">#######</Link></li>

    </Fragment>
    )
}

export default Links;