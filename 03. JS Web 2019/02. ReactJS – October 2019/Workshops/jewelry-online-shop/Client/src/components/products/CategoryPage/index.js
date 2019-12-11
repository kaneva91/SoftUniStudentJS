import React, { Component, Fragment, useState, useEffect } from 'react';
import styles from './CategoryPage.module.css';
import Item from '../Item';

import productServices from '../../../services/products-services';

class CategoryPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            pageTitle: this.props.categoryName.charAt(0).toUpperCase() + this.props.categoryName.slice(1) + 's',
            items: null
        }
    }
  
    componentDidMount() {
        productServices.load(`/${this.props.categoryName}`).then(data => 
            {this.setState({ items: data })
            console.log(this.props)});
    }

    render() {
      
        const { items, pageTitle } = this.state;
        return (
            <Fragment>
                <h1 className={styles.heading}>{pageTitle}</h1>
                <section className={styles['product-section']}>
                    {
                        items && items.map(item => <Item key={item.name} name={item.name} url={item.url} price={item.price} category={this.props.categoryName} id={item._id} />)
                    }
                </section>
            </Fragment >
        )
    }
}

export default CategoryPage;