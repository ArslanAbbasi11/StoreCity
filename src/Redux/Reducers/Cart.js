const initCart = {
   prod:[]
 }
 
export const Cart=(state=initCart,action)=> {
  switch (action.type) {
      case "ADD_TO_CART":
          return{
            ...state,
            prod:[...state.prod,action.payload]
            
          }
          case "DELETE":
            const newArray = [...state.prod]
            newArray.splice(action.payload,1)
            return{
                ...state,prod:newArray
           }
  
      default:
          return state;
  }
}


