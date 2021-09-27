 export const fetchProducts= (apiTyp)=> async (dispatch)=> {

 
     switch (true) {
           case apiTyp.typ=="ALL_RODUCTS":
                        const allResponce = await fetch('https://fakestoreapi.com/products')
                         const allData= await allResponce.json();
                         dispatch({type:"FETCH_ALL_PRODUCTS", payload: allData});
           case apiTyp.typ=="SINGLE_PRODUCT":
                        const singleResponce = await fetch(`https://fakestoreapi.com/products/val`)
                        const singleData= await singleResponce.json();
                        dispatch({type:"FETCH_SINGLE_PRODUCT", payload: singleData});
                        break;
          case apiTyp.typ=="LIMIT_RESULT":
                        const limitResponce = await fetch(`https://fakestoreapi.com/products?limit=${apiTyp.val}`);
                        const limitData= await limitResponce.json();
                        dispatch({type:"FETCH_LIMIT_RESULT", payload: limitData});
                        break;
          case apiTyp.typ=="ALL_CATEGORIES":
                        const allCat = await fetch(`https://fakestoreapi.com/products/categories`);
                        const allCatData= await allCat.json();
                        dispatch({type:"FETCH_ALL_CATEGORIES", payload: allCatData});
                        break;
                      
       default:
         break;
     }

  }  
 
  
