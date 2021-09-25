
import { useSelector } from 'react-redux'
import './Header.css';
import Logo from '../../appLogo.png';
import { Link } from 'react-router-dom';
const Header=()=>{
  const categories= useSelector(state=>state.Products.cat[0]);
return(
    <header>
        <div className="container">
        <div className="header-inner">
            <figure className="logo">
              <Link to="/">  <img src={Logo} alt="StoreCity Logo"/></Link>
            </figure>
            <nav>
        <Link to="/cart">   <button className="cart-button">0</button></Link>
            <div className="dropdown">
                    <div className="dropbtn">
                         <hr/>
                         <hr/>
                         <hr/>
                    </div>
           <div className="dropdown-content">
             <h6> <Link to={'/'}>HOME</Link></h6>
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