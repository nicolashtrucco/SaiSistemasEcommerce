/** @format */

import "../Items/item.scss";
import { FaShoppingBag } from "react-icons/fa";
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Item = ({ product }) => {

   const HandleNotify = () => toast.success("Agregado al Carrito!", {
      autoClose: 1500,
   });
   
   return (
      <div className="item-container">
        <div className="item-product">
         <div className="item-imgFlex">
            <img className="item-img" src={product.img} alt="" />

         </div>
         <h1 className="item-tittle">{product.nameProduct}</h1>
         <p className="item-description">{product.description}</p>
         <div className="item-buttons">
            <button className="item-buttonQueries">Consultar</button>
            <button className="item-buttonCart" onClick={HandleNotify}><FaShoppingBag/></button>
         </div>

        </div>
        <ToastContainer/>
      </div>
   );
};

export default Item;
