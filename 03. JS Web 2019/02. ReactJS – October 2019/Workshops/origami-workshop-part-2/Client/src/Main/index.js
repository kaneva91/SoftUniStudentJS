import React from 'react';
import styles from './Main.module.css';
import Posts from '../publications/Posts';

function Main() {
    return (
        <div className={styles.Main}>
            <h1 className={styles.h1}>
               Publications
            </h1>
            <Posts/>
        </div>
    )
}

export default Main;
