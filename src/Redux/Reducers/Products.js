const initialState = {
   all:[],
   limit:[],
   cat:[]
}


export const Products=(state=initialState, action)=>{
  

   switch (action.type)
   { 
        case "FETCH_ALL_PRODUCTS":
        return {...state,
            all:[...state.all,action.payload]
        }
        case "FETCH_LIMIT_RESULT":
        return {...state,
            limit:[...state.limit,action.payload]
        }
        case "FETCH_ALL_CATEGORIES":
        return {...state,
           cat:[...state.cat,action.payload]
        }
         default:
           return state

   }
}
