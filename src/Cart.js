import React from 'react'
import CartItem from './CartItem'

const Cart = ({items, addToCart, removeFromCart, checkout}) => {
    const total = () => {
        let result = 0;
        for (let i = 0; i < items.length; i++) {
            result += items[i].itemPrice * items[i].selected;
        }
        return result;
    }
    const itemList = items.map((item) => {
        return(
            <CartItem item={item} addToCart={addToCart} removeFromCart={removeFromCart}/>
        )
    })

    return(
        <div>
            <h3>Cart</h3>
            <ol>
                {itemList}
            </ol>
            <div>
                Total: ${total()} {' '}
                <button disabled={total() === 0} onClick={() => checkout(items)}>Checkout</button>
            </div>
        </div>
    )
}

export default Cart