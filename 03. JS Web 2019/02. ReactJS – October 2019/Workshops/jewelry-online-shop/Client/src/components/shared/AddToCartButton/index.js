import React from 'react';
import{Redirect} from 'react-router-dom';
import styled from './AddToCartButton.module.css';

const add =() =>{
  alert("added")
  return(<Redirect to='/'/>)
}

function Button({id, text}){
    return(
       <button className={styled.button} onClick={add}>{text}</button>
    )
}

export default Button;