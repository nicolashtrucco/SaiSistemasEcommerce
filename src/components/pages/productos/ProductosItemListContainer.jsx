import "../../Items/itemListContainer.scss";
import { getProducts } from "../../../data/data.js";
import { useState, useEffect } from "react";
import ItemList from "../../Items/ItemList.jsx";
import ProductosCategory from "./ProductosCategory.jsx";

const ProductosItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [query, setQuery] = useState('')

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

    const filteredProducts = products.filter((product)=>(
      product.nameProduct.toLowerCase().includes(query)
    ))
 
    return (
       <div className="itemListContainer-container">
          <div className="itemListContainer-flex">
             <h1 className="itemListContainer-tittle"><ProductosCategory setQuery={setQuery} query={query}/></h1>
             <div className="itemListContainer-products">
                <ItemList filteredProducts={filteredProducts}/>
             </div>
          </div>
       </div>

    )
}

export default ProductosItemListContainer