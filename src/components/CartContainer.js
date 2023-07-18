import React from 'react';
import CartsItems from './CartsItems';
import { useSelector } from 'react-redux';
import './CartItem.css';

const CartContainer = () => {
    const { cartItems, total, amount } = useSelector((store) => store.cart);

    if (amount < 1) {
        return (
            <section className='cart'>
                <header>
                    <h2>your bag</h2>
                    <h4 className='empty-cart'>is currently empty</h4>
                </header>
            </section>
        )
    }
  return (
    <section className='cart'>
        <header>
            <h2>your bag</h2>
        </header>
        <div>
            {
                cartItems.map((item) => {
                    return <CartsItems key={item.id} {...item} />
                })
            }
        </div>
        <footer>
            <hr />
            <div className='cart-total'>
                <h4>Total <span>${total}</span></h4>
            </div>
            <button className='btn clear-btn'>Clear cart</button>
        </footer>
    </section>
  )
}

export default CartContainer