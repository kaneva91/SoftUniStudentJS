import React from 'react';
import styles from './NotFound.module.css';

function NotFound() {
    return (
        <div className={styles.NotFound}>
            <h1>Something went wrong...</h1>
            <img src="/not-found.png" alt="not-found" />
        </div>
    )
}

export default NotFound;