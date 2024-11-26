/** @format */

import "../NavBar/navbar.scss";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";

const NavBar = () => {
const navRef = useRef();

const handleShowNavBar = () => {
    navRef.current.classList.toggle('responsive-nav')
}

   return (
      <>
         <header>
            <Link to={"/"}>
               <img
                  src="img/LogoSAI-Blanco.png"
                  alt=""
                  className="navbar-logo"
               />
            </Link>

            <nav className="navbar" ref={navRef}>
              <Link to={'/productos'} onClick={handleShowNavBar}>Productos</Link>
              <Link to={'/contacto'}onClick={handleShowNavBar}>Contacto</Link>
              <Link to={'/nosotros'}onClick={handleShowNavBar}>Nosotros</Link>
              {/* <input placeholder="Buscar" className="navbar-search" /> */}

              <button className="navbar-button navbar-buttonClose" onClick={handleShowNavBar}><FaTimes/></button>
            </nav>
            
            <div className="navbar-cartButton">
            
            <Cart />
            <button className="navbar-button" onClick={handleShowNavBar}><FaBars/></button>
            </div> 


         </header>
      </>
   );
};

export default NavBar;
