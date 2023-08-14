import React , {useState} from "react";
import "./Header.css";
import contact from "../../assets/contact-us-icon.89078068.png";
import search from "../../assets/search-icon.fc68ef9a.png";
import logo from "../../assets/Logo.869d0657.png";
import iran from "../../assets/Iran-mimt-logo.afb67c3a.png";
import tolid from "../../assets/tolid.d83e34ca.png";
const Header = (props) => {

   return(
        <header className="header">
            <div className="header__top">
                  <div className="header__top__text">
                           <h1>اطلاعیه :</h1>
                  </div>
                  <div className="header__top__icons">
                     <img src={contact} className="header__icon"/>
                     <img src={search} className="header__icon"/>
                  </div>
            </div>
            <div className="header__bottom__container">
               <div className="header__bottom">
                  <ul>
                     <li>
                           <img src={logo}/>
                     </li>
                     <li className="header__text">خدمات مرکز</li>
                     <li className="header__text">گزارشات مرکز</li>
                     <li className="header__text">درباره ما</li>
                  </ul>
                  <div className="bottom__icon">
                        <img src={tolid} className="header__logo1"/>
                        <img src={iran} className="header__logo2"/>
                  </div>
                  </div>
            </div>
        </header>
     );
  }
export default Header;