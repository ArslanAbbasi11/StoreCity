import './Home.css';
import {React} from 'react'
import { useSelector } from 'react-redux'
import { Carousel } from './Carousel/Carousel';
import Section from './Section/Section';
import { useDispatch } from 'react-redux';

import Loading from '../../Components/Loading/Loading';
const  Home=()=> { 
    var limitResult=useSelector(state=>state.Products?.limit[0]);
    var allProds=useSelector(state=>state.Products.all[0]);
    var categ=useSelector(state=>state.Products.cat[0]);

    return (
         <main>
       
              {!limitResult ? <Loading/> : <Carousel limitProd={limitResult}/>}
       
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
