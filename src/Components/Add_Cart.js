import React from 'react'
import { useDispatch } from 'react-redux';
import allActions from '../Redux/Actions/index';
const  Add_Cart=(props)=> {
    var dispatch=useDispatch();
     
           return    <button className="add-cart-button" onClick={()=>dispatch(allActions.Add_Cart(props.id))}>Add Cart </button>
      
    }


export default Add_Cart
