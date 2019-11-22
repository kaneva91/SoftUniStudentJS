import React from 'react';
import Links from '../shared/Links';
import styles from './Aside.module.css';

function Aside() {
    return (
        <aside className={styles.Aside}>
            <ul>
               <Links/>
            </ul>
        </aside>

    )
}

export default Aside;