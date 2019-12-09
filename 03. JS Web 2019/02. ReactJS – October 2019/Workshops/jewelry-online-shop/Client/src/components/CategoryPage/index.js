import React, { Component, Fragment } from 'react';

class CategoryPage extends Component {


    
    render(){

    console.log(this.props.categoryName)
    return(
        <Fragment>
            <h1>{this.props.categoryName}</h1>
            <section>

        </section>
    </Fragment >
    )
}
}

export default CategoryPage;