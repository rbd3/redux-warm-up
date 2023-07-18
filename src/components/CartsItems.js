import React from 'react';
import './CartItem.css';

const CartsItems = ({ id, img, title, price, amount }) => {
  return (
    <article className='cart-item'>
        <img src={img} alt={title} className='images'/>
    </article>
  )
}

export default CartsItems