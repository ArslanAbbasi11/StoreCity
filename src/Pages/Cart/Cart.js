import React,{useState,useEffect} from 'react'

import './Cart.css';
import { useSelector,useDispatch } from 'react-redux';
import allActions from '../../Redux/Actions';


const Cart = () => {
  var [subTotal,setSubTotal]=useState(0)
    
//const [carts,setCarts] = useState([]);
const cart = useSelector(state=>state.Cart.prod)
const dispatch = useDispatch();

useEffect(()=>{
 calSubTotal();
});
const calSubTotal=()=>{
  var price=0;
  cart.filter((value)=>price+=value.price);
  setSubTotal(price);
}
console.log(cart+" displayed")
    return (
            
        <div className="cart-wrapper">
            <h1>Shopping Cart</h1>
        
         
                <div className="Cart">
            <div className="products">
             
                {
                       cart?.map((value,index)=>(
                        
                <div className="product">
       
                 
                
                  <img src={value.image} alt="electronic"/>
                  <div className="product-info">
                      <h3 className="product-name">{value.title}{value.id}</h3>
                      <h2 className="product-price">Price : {value.price}</h2>
                
            <div className="quantity-wrap">
              
                          <button  className="quantity-btn">&#8593;</button>
                         <span>1</span>
                          <button className="quantity-btn">	&#8595;</button>        
                     </div>
     
                  </div>
                  <button className="dlt-btn" type="button" onClick={() => dispatch(allActions.deleteProduct(index))}>&#10006;</button>
                </div>
                ))
        
                }
              
            </div>   
            
              <div className="product-total">
                  <p>
                      <span>subtotal</span>
                      <span>${subTotal}</span>
                    </p>
                    <p>
                        <span>Number of Items</span>
                        <span>{cart.length}</span>
                    </p>
                  
                  <div className="btn3">
                  <button class="button"><span>Proceed to checkout</span></button>
                  </div>
                  </div>
              </div>
              
            
            
    
           
        </div>
    )
}
export default Cart;


