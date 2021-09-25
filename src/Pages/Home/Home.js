import './Home.css';
import {React} from 'react'
import { useSelector } from 'react-redux'
import { Carousel } from './Carousel/Carousel';
import Section from './Section/Section';

const  Home=()=> { 
    var limitResult=useSelector(state=>state.Products?.limit[0]);
    var allProds=useSelector(state=>state.Products.all[0]);
    var categ=useSelector(state=>state.Products.cat[0]);

   
    //console.log(limitResult);
   


    return (
         <main>
       
              <Carousel limitProd={limitResult}/>
       
           <section className="cat-sec">
           {
               categ?.map((value,index)=>(
                <Section allProd={allProds} cat={value}/>
               ))
           }
           </section>
        </main>
    )
}

export default Home
