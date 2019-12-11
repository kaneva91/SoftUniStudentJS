import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Item.module.css';
import AddToCartButton from '../../shared/AddToCartButton';

function Item({ name, url, price, category, id}) {

    return (
        <Link  to={`/${category}/${id}`}  className={styles.details}>
            <h3 className={styles.name}>{name}</h3>
            <img className={styles.image} src={url} alt="keychain" />
            <p className={styles.price}>Price: {price.toFixed(2)} lv.</p>
          <AddToCartButton id={id} text = {'Details'}/>
        </Link>
    )
}
export default Item;