import "../../Items/itemListContainer.scss";
import { getProducts } from "../../../data/data.js";
import { useState, useEffect } from "react";
import ItemList from "../../Items/ItemList.jsx";

const ProductosItemListContainer = () => {
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
                <ItemList products={products} />
             </div>
          </div>
       </div>

    )
}

export default ProductosItemListContainer