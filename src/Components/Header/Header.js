
import { useSelector } from 'react-redux'
import { useEffect } from 'react';
import './Header.css';
import Logo from '../../appLogo.png';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
const Header=()=>{
  const categories= useSelector(state=>state.Products.cat[0]);
  const cartCount= useSelector(state=>state.Cart.prod.length);
  var loginCheck=useSelector(state => state.Login.login);
var history=useHistory();
const checkLogin=()=>{
  if(loginCheck!==true){
history.push('/')
  }
}
useEffect(()=>(
checkLogin()
))
return(
    <header>
        <div className="container">
        <div className="header-inner">
            <figure className="logo">
              <Link to="/home">  <img src={Logo} alt="StoreCity Logo"/></Link>
            </figure>
            <nav>
        <Link to="/cart">   <button className="cart-button">{cartCount}</button></Link>
            <div className="dropdown">
                    <div className="dropbtn">
                         <hr/>
                         <hr/>
                         <hr/>
                    </div>
           <div className="dropdown-content">
             <h6> <Link to={'/home'}>HOME</Link></h6>
             <h5>categories </h5>
                  {
                      categories?.map((value)=>(
                        <Link to={`/category-details/${value}`}>{value}</Link>
                      ))
                  }
               
           </div>
          </div>
            </nav>
        </div>
        </div>
    </header>
)
}
export default Header;