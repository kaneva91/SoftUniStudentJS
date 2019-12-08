import React, { useState, Fragment } from 'react';
import { Carousel } from 'react-bootstrap';

import styles from './Main.module.css';


function Main() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        setDirection(e.direction);
    };

    return (
        <Fragment>
            <h1 className={styles['main-heading']}>
                Welcome to online jewerly store
            </h1>
            <div className={styles['store-description']}>
                A Luxury jewelry made of semi-precious stones
            </div>
            <span>
                
            </span>
        </Fragment>
    );
}



export default Main;
