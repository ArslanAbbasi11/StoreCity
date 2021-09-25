import React ,{useState} from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import allActions from '../Redux/Actions/index';
const  Add_Cart=(props)=> {
    var id=props.id.id;
  var [flag,setFlag]=useState(false);
    var dispatch=useDispatch();
    var productId= useSelector(state => state.Cart.prod);
    const addCart=()=>{
        
       productId?.filter((value)=>{
     
           if(id==value.id){
               return setFlag(flag=true);
           }
       })
           
            if(!flag){
                dispatch(allActions.Add_Cart(props.id))
            }
            else{
                alert("already added to cart");
            }
        
    }
     
           return    <button className="add-cart-button" onClick={()=>addCart()}>Add Cart </button>
      
    }


export default Add_Cart
