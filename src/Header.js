import React from "react";
import './Header.css';
import { GoSearch } from 'react-icons/go';
import { BsFillBasket2Fill } from "react-icons/bs";
import { Link } from "react-router-dom";


// import SearchIcon from '@mui/icons-material/Search';
function Header() {

  
  return (
    <div className="header">
      
      <Link to="/checkout">
     
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""
        />
       </Link>
       
       <div className ="header_search">
      <input className="header_searchInput" type="text"/>
        <GoSearch className="header_searchIcon"/> 
      {/* logo */}
      </div>

      <div className="header_nav">

        <div className="header_option">
        <span className='header_optionLineOne'>Hello Guest</span>
          <span className='header_optionLineTwo'> SignIn</span>
        </div>
      
      <div className="header_option">
      <span className='header_optionLineOne'>Returns</span>
          <span className='header_optionLineTwo'>& Orders</span>

      </div>

      <div className="header_option">
      <span className='header_optionLineOne'>Your</span>
          <span className='header_optionLineTwo'>prime</span>
          </div>
        <Link to="/checkout">
          <div className="header_optionBasket">
         {/* <BsFillBasket2Fill/> */ }
         <BsFillBasket2Fill className="header_optionBasket"/>
       <span className="header_optionLineTwo  header_basketcount">0</span>
          </div>
          </Link>
          </div>
            </div>
           );
}

export default Header;
