import "../../Header/header.scss";
import ProductosItemListContainer from "./ProductosItemListContainer";

const Productos = () => {
  return (
    <div>
        <div className="header-container">
            <div className="header-slogan">
               <div>
                  <h1>
                    PRODUCTOS
                  </h1>
               </div>
            </div>
         </div>
         <ProductosItemListContainer/>

    </div>
  )
}

export default Productos