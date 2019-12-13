import React, { Fragment, useState, useEffect } from 'react';
import styles from './CategoryPage.module.css';
import Item from '../Item';

import productServices from '../../../services/products-services';

function CategoryPage({ categoryName }) {

    const [pageTitle, setPageTitle] = useState(categoryName.charAt(0).toUpperCase() + categoryName.slice(1));
    const [items, setItems] = useState(null);

    useEffect(() => {
        productServices.load(`/${categoryName}`)
        .then(data => setItems(data))
    }, [])

    return (
        <Fragment>
            <h1 className={styles.heading}>{pageTitle}</h1>
            <section className={styles['product-section']}>
                {
                    items && items.map(item => <Item key={item.name} name={item.name} url={item.url} price={item.price.toFixed(2)} category={categoryName} id={item._id} />)
                }
            </section>
        </Fragment >
    )
}

export default CategoryPage;