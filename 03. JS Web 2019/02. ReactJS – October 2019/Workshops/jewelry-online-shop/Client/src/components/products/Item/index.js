import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Item.module.css';

function Item({ name, url, price, category, id}) {

    return (
        <Link  to={`/${category}/${id}`}  className={styles.details}>
            <h3 className={styles.name}>{name}</h3>
            <img className={styles.image} src={url} href="keychain image" />
            <p className={styles.price}>Price: {price.toFixed(2)} lv.</p>
            <Link to="/" className={styles.button}>Add to Cart </Link>
        </Link>
    )
}
export default Item;