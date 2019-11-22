import React from 'react';
import styles from './Footer.module.css';
import ListItem from '../shared/ListItem';
import listItemsText from '../shared/list-array';

function Footer() {
    return (
        <footer className={styles.Footer}>
            <ul>
                {
                    listItemsText.map((text, index) => {
                        return <ListItem key={index} url='#' content={text} />
                    })
                }
                <ListItem url='#' content={'img-blue-origami-bird-flipped.png'} />
            </ul>
            <p>
                Software University &copy; 2019
            </p>
        </footer>
    )
}

export default Footer;