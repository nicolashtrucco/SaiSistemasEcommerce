import '../NavBar/cart.scss'
import { useState, useEffect } from 'react'
import { CiShoppingCart } from "react-icons/ci";

const Cart = () => {
  return (
    <div className='cart-container'>
        <CiShoppingCart className='cart-icon'/>
        <p className='cart-counter'>0</p>
    </div>
  )
}

export default Cart