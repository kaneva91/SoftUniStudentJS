import React, { useState, Fragment } from 'react';
import { useParams } from "react-router";
import productService from '../../../services/products-services';
import styles from './Details.module.css';

function Details() {

    const [item, setItems] = useState(null);
    const { id } = useParams();

    productService.details('bracelet', id)
        .then(res => {
           
            console.log(res)
        })
        .catch(err => console.log(err))

    return (
        <Fragment>
        <section className={StyleSheetList['image-wrapper']}>Details</section>
        <section className={StyleSheetList['image-details-wrapper']}>Details</section>
        </Fragment>
    )
}

export default Details;