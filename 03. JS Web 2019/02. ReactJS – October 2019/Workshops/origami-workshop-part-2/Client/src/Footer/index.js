import React from 'react';
import styles from './Footer.module.css';
import Links from '../shared/Links';
import Image from '../shared/Image';

function Footer() {
    return (
        <footer className={styles.Footer}>
            <ul>
             <Links/>
             <Image img = {'/blue-origami-bird-flipped.png'}/>
            </ul>
            <p>
                Software University &copy; 2019
            </p>
        </footer>
    )
}

export default Footer;