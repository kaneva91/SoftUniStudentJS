import React, { useContext, useEffect, useState, Fragment} from 'react';
import userServices from '../../../services/user-services';
import { UserContext } from '../../ContextWrapper';
import CartTable from '../CartTable';

import styles from './Cart.module.css';


function Cart() {

    const [user] = useContext(UserContext);
    const [cartItems,sertCatItems] = useState([]);

    useEffect(()=>{
       user &&  userServices.getCartItems(user.userId)
        .then(res => {
            sertCatItems(res)
            console.log(cartItems)})
        .catch(err => console.log(err))
    },[])

    return (
        <Fragment>
             <h1 className={styles['page-heading']}>Items in Your Cart</h1>
            { cartItems.length != 0 ? 
            <CartTable items={cartItems}/> :  
         <div> Your cart is empty</div>}
        </Fragment>
       
    )
}

export default Cart;