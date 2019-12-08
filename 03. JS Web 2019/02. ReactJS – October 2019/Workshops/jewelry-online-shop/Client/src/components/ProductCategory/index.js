import React from 'react';
import{Link} from 'react-router-dom';
import styles from './ProductCategory.module.css';

function ProductCategory({name, imgPath, link}){
    return (
       <Link to={link} className={styles['category-wrapper']}>
            <h3>
                {name}
            </h3>
            <img src={imgPath} alt="category-image"/>
       </Link>
    )
}

export default ProductCategory;