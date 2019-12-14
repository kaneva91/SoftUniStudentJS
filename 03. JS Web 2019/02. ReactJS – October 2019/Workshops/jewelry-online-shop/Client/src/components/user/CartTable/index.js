import React from 'react';
import styles from './CartTable.module.css';

function CartTable({items}) {
    return (
        <div className={styles.Table}>
            <div className={styles.Heading}>
                <div className={styles.Cell}>
                    <p>Image</p>
                </div>
                <div className={styles.Cell}>
                    <p>Name</p>
                </div>
                <div classeName={styles.Cell}>
                    <p>Price</p>
                </div>
            </div>
        {
        items.map(itemData => {
            const item=JSON.parse(itemData)
    
            return(
                <div className={styles.Row} key={item._id}>
                <div className={styles.Cell}>
                    <p>
                        <img src={item.url} alt="cart-item"/>
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
        </div>

    )
}

export default CartTable;