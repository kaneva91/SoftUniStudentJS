import React, { Fragment, useState, useEffect } from 'react';
import styles from './CategoryPage.module.css';
import Item from '../Item';

import productServices from '../../../services/products-services';

function CategoryPage({ categoryName }) {
    const pageTitle = categoryName.charAt(0).toUpperCase() + categoryName.slice(1) + 's';

    const [items, setItems] = useState([]);


    productServices.load(categoryName).then(items => {
        setItems(items);
        console.log(items)
        return;

    });




    return (
        <Fragment>
            <h1 className={styles.heading}>{pageTitle}</h1>
            <section className={styles['product-section']}>
                {
                    items && items.map(item => <Item key={item.name} name={item.name} url={item.url} price={item.price} category={categoryName} id={item._id} />)
                }
            </section>
        </Fragment >
    )

}



export default CategoryPage;