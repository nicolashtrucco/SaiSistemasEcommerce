/** @format */

import "../Items/itemListContainer.scss";
import { getProducts } from "../../data/data.js";
import { useState, useEffect } from "react";
import ItemList from "./ItemList.jsx";
const ItemListContainer = ( ) => {
   const [products, setProducts] = useState([]);

   useEffect(() => {
      getProducts()
         .then((data) => {
            setProducts(data);
         })
         .catch((error) => {
            console.log(error);
         })
         .finally(() => {
            console.log("Finish");
         });
   }, []);

   return (
      <div className="itemListContainer-container">
         <div className="itemListContainer-flex">
            <h1 className="itemListContainer-tittle">Productos Destacados</h1>
            <div className="itemListContainer-products">
               <ItemList products={products.slice(0, 3)} />
            </div>
         </div>
      </div>
   );
};

export default ItemListContainer;
