const initCart = {
   prod:[],
   count:0
 }
 
export const Cart=(state=initCart,action)=> {
  switch (action.type) {
      case "ADD_TO_CART":
          return{
            ...state,
            prod:[...state.prod,action.payload],
            
          }
  
      default:
          return state;
  }
}


