import React from 'react';
import styles from './Keychain.module.css';

function Item({ name, url, price }) {
    return (
        <div className={styles.details }>
            <h3 className={styles.name}>{name}</h3>
            <img className={styles.image} src={url} href="keychain image"/>
            <p className={styles.price}>{price}</p>
            <div>
            <button>Add to Cart</button>
            <button>details</button>
        </div>
        </div>
        
    )
}

export default Item;