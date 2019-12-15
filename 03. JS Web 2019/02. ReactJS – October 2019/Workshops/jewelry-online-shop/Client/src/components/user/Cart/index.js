import React, { useContext, useEffect, useState, Fragment } from 'react';
import userServices from '../../../services/user-services';
import { UserContext } from '../../ContextWrapper';
import { useHistory } from 'react-router-dom';

import styles from './Cart.module.css';


function Cart() {

    const [user] = useContext(UserContext);
    const [cartItems, sertCatItems] = useState([]);
    const history = useHistory();
    let totalPrice = 0;

    useEffect(() => {
        user && userServices.getCartItems(user.userId)
            .then(res => sertCatItems(res))
            .catch(err => console.log(err))
    }, []);

    const checkOut = () => {
        user && userServices.deleteCart(user.userId)
            .then((resp) => {
                history.push('/')
            })
            .catch(err => console.log(err))
    }

    return (
        <Fragment>
            <h1 className={styles['page-heading']}>Items in Your Cart</h1>
            {cartItems.length !== 0 ?
                <div className={styles.Table}>
                    <div className={styles.Heading}>
                        <div className={styles.Cell}>
                            <p>Item Image</p>
                        </div>
                        <div className={styles.Cell}>
                            <p>Item Name</p>
                        </div>
                        <div className={styles.Cell}>
                            <p>Item Price</p>
                        </div>
                    </div>
                    {
                        cartItems.map(itemData => {
                            const item = JSON.parse(itemData)
                            totalPrice += item.price;
                            return (
                                <div className={styles.Row} key={item.url}>
                                    <div className={styles.Cell}>
                                        <p>
                                            <img src={item.url} alt="cart-item" />
                                        </p>
                                    </div>
                                    <div className={styles.Cell}>
                                        <p>{item.name}</p>
                                    </div>
                                    <div className={styles.Cell}>
                                        <p>{item.price} lv.</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className={styles.Row} >
                        <div className={styles.Cell}>
                            <p className={styles.price}>Summury</p>
                        </div>
                        <div className={styles.Cell}>
                            <p className={styles}> Total Price {totalPrice.toFixed(2)}lv.</p>
                        </div>
                        <div className={styles.Cell}>
                            <p>
                                <button className={styles.button} onClick={checkOut}> Check Out</button>
                            </p>
                        </div>
                    </div>
                </div>
                :
                <div className={styles.empty}> Your cart is empty</div>}
               
        </Fragment>
    )
}

export default Cart;