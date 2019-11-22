import React from 'react';
import styles from '../Links//Links.module.css'

function Image({ img }) {
    return (
        <li className = {styles.listItem}>
            <img src={img} alt="Origami" />
        </li>
    )
}

export default Image;