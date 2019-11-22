import React from 'react';
import styles from './Link.module.css'


function ListItem({ content, url }) {

    if (content.includes('img')) {
        const imgSource = content.slice(4);

        return (
            <li className={styles.listItem}>
                <img src={imgSource} alt='' />
            </li>
        )
    }

    return (
        <li className={styles.listItem}>
            <a href={url}>{content}</a>
        </li>
    )
}

export default ListItem;