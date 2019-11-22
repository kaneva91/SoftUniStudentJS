import React from 'react';
import ListItem from '../shared/ListItem';
import styles from './Navigation.module.css';
import listItemsText from '../shared/list-array';

function Navigation() {
    return (
        <nav className={styles.Navigation}>
            <ul>
                <ListItem url='#' content={'img-white-origami-bird.png'} />
                {
                    listItemsText.map((text, index) => {
                        return <ListItem key={index} url='#' content={text} />
                    })
                }
            </ul>
        </nav>
    )
}

export default Navigation;