import React from 'react';
import Links from '../shared/Links';
import styles from './Navigation.module.css';
import Image from '../shared/Image';

function Navigation() {
    return (
        <nav className={styles.Navigation}>
            <ul>
                <Image img={'/white-origami-bird.png'}/>
                <Links/>
            </ul>
        </nav>
    )
}

export default Navigation;