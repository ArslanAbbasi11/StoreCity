export const add_Cart=(product)=>{
   return{
       type:"ADD_TO_CART",
       payload:product
   }
}
export const deleteProduct = (index) => {
    alert("delete")
    return{
        type: "DELETE",
        payload:index
    }
}
