import React, { useState,useEffect, Fragment, Component } from 'react';
import { useParams } from "react-router";
import productService from '../../../services/products-services';
import styles from './Details.module.css';
/* 
function Details() {

    const [item, setItems] = useState(null);
    const { id } = useParams();
  //  const{url, description } = item;    

  useEffect(()=>{
    productService.details('bracelet', id)
        .then(res => {
           setItems(res);
           console.log(item)
        },[item])
        .catch(err => console.log(err))
  })
    return (
        <Fragment>
        <section className={styles['image-wrapper']}>
         
        </section>
        <section className={styles['details-wrapper']}>Details</section>
        </Fragment>
    )
} */

class Details extends Component{
    constructor (props){
        super(props)

        this.state = {
            item : null
        }
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        productService.details('bracelet', id)
        .then(res => {this.setState({item : res})
    console.log(this.state.item)})
    }

    render(){
        const item = this.state.item;
        return(
            <Fragment>
            <section className={styles['image-wrapper']}>
                {
                    item &&<Fragment>
                        <img className ={styles.image} src={item.url}/>
                    </Fragment>
                }
            </section>
            <section className={styles['details-wrapper']}>
            {
                    item &&<Fragment>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <p>{item.price}</p>
                    </Fragment>
                }
            </section>
            
            </Fragment>
        )
    }
}

export default Details;