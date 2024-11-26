import React from 'react'
import '../productos/productosCategory.scss'

const ProductosCategory = ({setQuery, query}) => {
  const handleInput = (e) => (
    setQuery(e.target.value.toLowerCase())
  )

  return (
    <div className='productosCategory-container'>
      <div className='productosCategory-input'>

        <input type="text" onChange={handleInput} placeholder='Buscar...' value={query}/>

      </div>
    </div>
  )
}

export default ProductosCategory
