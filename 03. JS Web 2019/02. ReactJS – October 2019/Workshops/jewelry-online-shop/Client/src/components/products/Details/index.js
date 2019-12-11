import React, { Fragment, useState, useEffect, useContext } from 'react';
import productService from '../../../services/products-services';
import userServices from '../../../services/user-services';
import styles from './Details.module.css';
import { UserContext } from '../../ContextWrapper'


function Details() {

    const [item, setItemState] = useState(null);
    const [user] = useContext(UserContext);
  
    const addToCart = () => {
        if(user.userId){
         const itemId = window.location.pathname.split('/')[2];
        userServices.add(user.userId, itemId)
        .then(res =>console.log(res))
        .catch(err => console.log(err))
            
        }
    }
    const path = window.location.pathname;
    
    useEffect(() => {
        productService.load(path)
            .then(res => {
                setItemState(res)
            })
    }, [])

    return (

        <Fragment>

            {item && <section className={styles['image-wrapper']}>

                <Fragment>
                    <img className={styles.image} src={item.url} />
                </Fragment>

            </section>}

            {item && <section className={styles['details-wrapper']}>

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