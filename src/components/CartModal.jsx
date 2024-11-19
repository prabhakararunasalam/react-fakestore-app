import React from 'react';

const CartModal = ({CartItems , setModalOpen ,removeCartItem}) => {

    return (
        <div className='cart-modal'>
            <h1>Your Cart</h1>
            {CartItems.length === 0 ? (
                <p>Cart is Empty!</p>
            ):
            (
             CartItems.map((item) =>(
                <div key={item.id} className='cart-item'>
                <img src={item.image} alt={item.title} />
                <h4>{item.title}</h4>
                <p>₹ {item.price}</p>
                <button onClick={()=>removeCartItem(item.id)}>Remove</button>
                </div>
             ))
            )
            }
            <button onClick={() => setModalOpen(false)} className='close-btn'>Close</button>
        </div>
    );
};

export default CartModal;