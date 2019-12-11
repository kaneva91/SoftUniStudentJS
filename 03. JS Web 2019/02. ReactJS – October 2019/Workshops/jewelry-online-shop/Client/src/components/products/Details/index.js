import React, {Fragment, Component } from 'react';

import productService from '../../../services/products-services';
import styles from './Details.module.css';

class Details extends Component {
    constructor(props) {
        super(props)

        this.state = {
            item: null
        }
    }

    componentDidMount() {
        const path = this.props.history.location.pathname
        productService.load(path)
            .then(res => {
                this.setState({ item: res })
                console.log(this.props.history.location.pathname)
            })
    }

    render() {
        console.log(this.props)
        const item = this.state.item;
        return (
            <Fragment>
                <section className={styles['image-wrapper']}>
                    {
                        item && <Fragment>
                            <img className={styles.image} src={item.url} />
                        </Fragment>
                    }
                </section>
                <section className={styles['details-wrapper']}>
                    {
                        item && <Fragment>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <p>Price:{item.price.toFixed(2)}lv.</p>
                        </Fragment>
                    }
                </section>
                <div>
                <button className={styles.button} >Add to Cart</button>
                </div>
            </Fragment>
        )
    }
}

export default Details;