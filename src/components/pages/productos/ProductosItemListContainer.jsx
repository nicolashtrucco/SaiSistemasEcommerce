/** @format */

import "../../Items/itemListContainer.scss";
import { getProducts } from "../../../data/data.js";
import { useState, useEffect } from "react";
import ItemList from "../../Items/ItemList.jsx";
import ProductosCategory from "./ProductosCategory.jsx";
import useProducts from "../../CustomHooks/useProducts.jsx";
import { BeatLoader } from "react-spinners";

const ProductosItemListContainer = () => {
   const [products, setProducts] = useState([]);
   const [query, setQuery] = useState("");
   const { loading } = useProducts();

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

   const filteredProducts = products.filter(
      (product) =>
         product.nameProduct.toLowerCase().includes(query) ||
         product.category.toLowerCase().includes(query)
   );

   return (
      <div className="itemListContainer-container">
         <div className="itemListContainer-flex">
            <div className="itemListContainer-tittle">
               <ProductosCategory setQuery={setQuery} query={query} />
            </div>
            <div className="itemListContainer-products">
               {loading ? (
                  <BeatLoader className="itemListContainer-loading" color={"orange"} size={30} />
               ) : filteredProducts.length > 0 ? (
                  <ItemList filteredProducts={filteredProducts} />
               ) : (
                  <p className="itemListContainer-ups">
                     Lo sentimos, no se encontraron productos que coincidan con
                     tu búsqueda.
                  </p>
               )}
            </div>
         </div>
      </div>
   );
};

export default ProductosItemListContainer;
