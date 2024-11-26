/** @format */
import { useState, useEffect } from "react";
import { getProducts } from "../../data/data";

const useProducts = () => {
   const [products, setProducts] = useState([]);
   const [loading, setLoading] = useState(false)

   useEffect(() => {
        setLoading(true)

      getProducts()
         .then((data) => {
            setProducts(data);
         })
         .catch((error) => {
            console.log(error);
         })
         .finally(() => {
            setLoading(false);
         });
   }, []);
   return {products, loading};
};

export default useProducts;