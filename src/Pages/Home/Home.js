import './Home.css';
import React from 'react'
import { useSelector} from 'react-redux';
import { Carousel } from './Carousel/Carousel';
import Section from './Section/Section';
import { useHistory } from 'react-router';
import { useEffect } from 'react';
import Loading from '../../Components/Loading/Loading';

const  Home=()=> { 
 
    var limitResult=useSelector(state=>state.Products?.limit[0]);
    var allProds=useSelector(state=>state.Products.all[0]);
    var categ=useSelector(state=>state.Products.cat[0]);
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
      
           
        <main>

          
        { !limitResult ? <Loading/> : <Carousel limitProd={limitResult}/>}
 
     <section className="cat-sec">
     {!allProds?.length ?<Loading/> :
         categ?.map((value,index)=>(
          <Section allProd={allProds} cat={value}/>
         ))
     }
     </section>
  </main>
       
    )
}

export default Home
