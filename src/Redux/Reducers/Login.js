const initLog = {
   login:'false'
  }
  
 export const Login=(state=initLog,action)=> {
   switch (action.type) {
       case "LOGIN":
           return{
            ...state,
             login:(state.login=action.payload)
           }
   
       default:
           return state;
   }
 }
 