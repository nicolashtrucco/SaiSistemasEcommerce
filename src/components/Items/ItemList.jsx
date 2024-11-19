import '../Items/itemList.scss'
import Item from './Item'

const ItemList = ( {products} ) => {
  return (
    <>
      {
          products.map((product) => (
            <div className='itemList-container' key={product.id}>
              <Item product={product} />
            </div>
          ))
        }
    </>
  )
}

export default ItemList