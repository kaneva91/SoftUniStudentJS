import React, { useContext, useEffect, useState, Fragment} from 'react';
import userServices from '../../../services/user-services';
import { UserContext } from '../../ContextWrapper';


function Cart() {

    const [user] = useContext(UserContext);
    const [cartItems,sertCatItems] = useState(null);

    useEffect(()=>{
       user &&  userServices.getCartItems(user.userId)
        .then(res => {
            sertCatItems(cartItems)
            console.log(res)})
        .catch(err => console.log(err))
    },[])

   
    return (
        <Fragment>
             <h1>Cart</h1>
            { cartItems && <div>{cartItems}</div>}
        </Fragment>
       
    )
}

export default Cart;