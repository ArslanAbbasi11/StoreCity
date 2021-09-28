import React, { useState,useEffect} from 'react'
import { Link , useParams} from 'react-router-dom';
import Loading from '../../Components/Loading/Loading';
import { useSelector } from 'react-redux'
import Add_Cart from '../../Components/Add_Cart';
import { useHistory } from 'react-router';

function Category_Details() {
  

 var {category}=useParams();
  
    const [products,setProducts]=useState([]);
    const allcategory = useSelector(state=>state.Products.all[0]);
  

useEffect(()=>{
    if(allcategory?.length)
    filterCate()
},[allcategory?.length,category])

const filterCate=async ()=>{

    const filteredArr= await allcategory?.filter((item)=>(
     item.category===category

   ))
  
    setProducts(filteredArr);
   
    }
    var loginCheck=useSelector(state => state.Login.login);
    var history=useHistory();
    const checkLogin=()=>{
      if(loginCheck!=true){
    history.push('/')
      }
    }
    useEffect(()=>(
    checkLogin()
    ))
       

    return (
      <div className="cat-outer">
            <h1 className="cat-name">{category.toUpperCase()}</h1>
            <div className="cat-wrapper">
               
                       {!products?.length ? <Loading/> : products?.map((value,index)=>(
                             <div className="product-wrap" key={index}>
                             <Link to={`/product_detail/${value.id}`}>{!value?.image ? <Loading/>
                              :<figure><img src={value.image} alt="product picture"/></figure>}</Link>
                            <h5>{value.title}</h5>
                            <h6>{value.description}</h6>
                             <h4>price : ${value.price}</h4>
                           <Add_Cart id={value}/>
                               </div>
                            )
                        )}
            </div>
        
      </div>

    
    )
}

export default Category_Details
