import React from 'react';
import productService from '../../services/products-services';

class Details extends React.Component{
    constructor(props){
        super(props)

        this.state ={
            item : null,
        }
    }

   
   
    componentDidMount(){
        const id = this.props.match.params.id;
        productService.details('bracelet', id)
        .then(res => console.log(res))
        .catch(err=> console.log(err))
    }
 
    render(){
        return(
            <h1>Details</h1>
        )
    }
  
}

export default Details;