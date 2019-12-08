
import React,{Fragment}from 'react';
import styles from './Main.module.css';
import ProductCategory from '../ProductCategory';


function Main() {

    return (
        <Fragment>
            <h1 className={styles['main-heading']}>
                Welcome to online jewerly store
            </h1>
            <div className={styles['store-description']}>
                A Luxury jewelry made of semi-precious stones
            </div>
            <section className={styles['product-categories']}>
                <ProductCategory name = "Bracelets" imgPath="/bracelet.jpg" link="/bracelets"/>
                <ProductCategory name = "Earrings" imgPath="/earrings.jpg" link="/earings"/>
                <ProductCategory name = "Keychains" imgPath="/keychain.jpg" link="/keychains"/>


            </section>
        </Fragment>
    );
}



export default Main;
