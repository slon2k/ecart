import React from 'react'

const CartItem = ({item, addToCart, removeFromCart}) => {
    return(
        <li>
            {item.itemName} - ${item.itemPrice} x {item.selected}{' '}
            <button type={'button'} disabled={item.inStock === 0} onClick = {()=> addToCart(item.id)}>+</button>{' '}
            <button type={'button'} onClick = {()=> removeFromCart(item.id)}>-</button>{' '}
            ({item.inStock} in stock)
        </li>
    )
}

export default CartItem