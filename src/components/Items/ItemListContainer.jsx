/** @format */
// ItemListContainer.jsx
import useProducts from "../CustomHooks/useProducts.jsx";
import "../Items/itemListContainer.scss";
import ItemList from "./ItemList.jsx";
import { BeatLoader } from "react-spinners";

const ItemListContainer = () => {
   const { products, loading } = useProducts();

   
   const filteredProducts = products.slice(0, 3);

   return (
      <div className="itemListContainer-container">
         <div className="itemListContainer-flex">
            <h1 className="itemListContainer-tittle">Productos Destacados</h1>
            <div className="itemListContainer-products">
               {loading === true ? (
                  <BeatLoader className="itemListContainer-loading" color={"orange"} size={30} />
               ) : (
                  <ItemList filteredProducts={filteredProducts} />
               )}
            </div>
         </div>
      </div>
   );
};

export default ItemListContainer;
