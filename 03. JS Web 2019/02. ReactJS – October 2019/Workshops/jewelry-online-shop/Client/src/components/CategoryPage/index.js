import React, { Fragment, useState } from 'react';
import styles from './CategoryPage.module.css';
import Item from '../products/Item';

import productServices from '../../services/products-services';

function CategoryPage({ categoryName }) {

    const [items, setItems] = useState([]);


    productServices.load('keychain').then(items => {
        setItems(items);

    });

    return (
        <Fragment>
            <h1 className={styles.heading}>{categoryName}</h1>
            <section className={styles['product-section']}>
                {
                    items && items.map(item => <Item key={item.name} name={item.name} url={item.url} price={item.price} />)
                }
            </section>
        </Fragment >
    )

}



export default CategoryPage;