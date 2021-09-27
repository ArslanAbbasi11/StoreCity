import {React,useEffect} from 'react';
import { Route, Switch ,Redirect} from 'react-router';
import './App.css';
import Header from './Components/Header/Header';
import Cart from './Pages/Cart/Cart';
import Error from './Pages/error';
import Category_Details from './Pages/Category_Details/Category_Details';
import Home from './Pages/Home/Home';
import Details from './Pages/Products/Details';
import { useDispatch ,useSelector} from 'react-redux';
import allActions from './Redux/Actions';
import BuyNow from './Pages/BuyNow/BuyNow';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import { useHistory } from 'react-router';

function App() {
  var loginCheck=useSelector(state => state.Login.login);
  
  var dispatch= useDispatch();
  const allProdObj={
    typ:"ALL_RODUCTS",
    val:null
}
  const allCatObj={
    typ:"ALL_CATEGORIES",
    val:null
  }
  const limitObj={
    typ:"LIMIT_RESULT",
    val:6
}



useEffect(()=>{
dispatch(allActions.fetchProducts(limitObj));

},[]);

  useEffect(()=>{
    
    dispatch(allActions.fetchProducts(allCatObj));
    
},[]);
useEffect(()=>{
    
  dispatch(allActions.fetchProducts(allProdObj));
  
},[]);

var loginCheck=useSelector(state => state.Login.login);
var history=useHistory();
const checkLogin=()=>{
      
  if(loginCheck){
history.push('/')
  }
}
useEffect(()=>(
checkLogin()
))
 

  return (
    <>
    <Header/>
    <div className="container">
              <Switch>
             
             <Route path="/" exact  component={Login}/>
              <Route path="/home" component={Home} />
                 <Route path="/cart" component={Cart}/>
                 <Route path="/product_detail/:id" component={Details}/>
                 <Route path="/proceed-checkout" component={BuyNow}/>
                 <Route path="/category-details/:category" component={Category_Details}/>
                 <Route  component={Error}/>
              </Switch>
            
    </div>
    <Footer/>
    </>
  );
}

export default App;
