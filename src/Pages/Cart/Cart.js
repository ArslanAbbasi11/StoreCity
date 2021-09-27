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
 if(cart.length) calSubTotal();
});
const calSubTotal=()=>{
  var total=cart.filter((value)=>total+=value.price);
  setSubTotal(total);
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
                      <div className="btn-wrap">
            <div className="btn1">
              
              <button >+ </button>
              
            <button >- </button>        
                     </div>
                     <div className="btn2">
                     <button type="button" onClick={() => dispatch(allActions.deleteProduct(index))}>Delete</button>
                     </div>
                     </div>
                  </div>
                  
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
                        <span>2</span>
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


