import {React,useEffect} from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Header from './Components/Header/Header';
import Cart from './Pages/Cart/Cart';
import Error from './Pages/error';
import Category_Details from './Pages/Category_Details/Category_Details';
import Home from './Pages/Home/Home';
import Details from './Pages/Products/Details';
import { useDispatch } from 'react-redux';
import allActions from './Redux/Actions';

function App() {
  var dispatch= useDispatch();
  const allObj={
      typ:"ALL_RODUCTS",
      val:null
  }
  const limitObj={
      typ:"LIMIT_RESULT",
      val:6
  }
  const allCatObj={
      typ:"ALL_CATEGORIES",
      val:null
  }

  useEffect(()=>{
    
      dispatch(allActions.fetchProducts(allObj));
      
},[]);
useEffect(()=>{
  dispatch(allActions.fetchProducts(limitObj));
  
},[]);

  useEffect(()=>{
    
      dispatch(allActions.fetchProducts(allCatObj));
      
},[]);

  return (
    <>
    <Header/>
    <div className="container">
              <Switch>
                 <Route path="/" exact component={Home}/>
                 <Route path="/cart" component={Cart}/>
                 <Route path="/product_detail/:id" component={Details}/>
                 <Route path="/category-details/:category" component={Category_Details}/>
                 <Route  component={Error}/>
              </Switch>
    </div>
    </>
  );
}

export default App;
