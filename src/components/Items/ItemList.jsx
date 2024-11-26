import '../Items/itemList.scss'
import Item from './Item'

const ItemList = ( {filteredProducts} ) => {
  return (
    <>
      {
          filteredProducts.map((product) => (
            <div className='itemList-container' key={product.id}>
              <Item product={product} />
            </div>
          ))
        }
    </>
  )
}

export default ItemList