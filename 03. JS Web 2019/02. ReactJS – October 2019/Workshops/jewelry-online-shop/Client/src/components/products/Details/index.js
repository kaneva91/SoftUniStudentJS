import React, { Fragment, useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import productService from '../../../services/products-services';
import userServices from '../../../services/user-services';
import styles from './Details.module.css';
import { UserContext } from '../../ContextWrapper';


function Details() {
    const history = useHistory();

    const [item, setItemState] = useState(null);
    const [user] = useContext(UserContext);

    const addToCart = () => {
        user.loggedIn ?
            user.userId &&
            userServices.addItem(user.userId, item)
                .catch(err => console.log(err))
            :
            history.push('/login');
    }

    useEffect(() => {
        const path = window.location.pathname;
        productService.load(path)
            .then(res =>
                setItemState(res))
    }, [])

    return (
        <Fragment>
            {item &&
                <section className={styles['image-wrapper']}>
                    <Fragment>
                        <img className={styles.image} src={item.url} alt="item"/>
                    </Fragment>
                </section>}
            {item &&
                <section className={styles['details-wrapper']}>
                    <Fragment>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <p>Price:{item.price.toFixed(2)}lv.</p>
                    </Fragment>
                </section>
            }
            <div>
                <button className={styles.button} onClick={addToCart}>Add to Cart</button>
            </div>
        </Fragment>
    )
}


export default Details;