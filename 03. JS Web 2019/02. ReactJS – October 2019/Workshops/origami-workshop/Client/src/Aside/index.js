import React from 'react';
import ListItem from '../shared/ListItem';
import styles from './Aside.module.css';
import listItemsText from '../shared/list-array';


function Aside() {
    return (
        <aside className={styles.Aside}>
            <ul>
                {
                    listItemsText.map((text, index) => {
                        return <ListItem key={index} url='#' content={text} />
                    })
                }
            </ul>
        </aside>

    )
}

export default Aside;