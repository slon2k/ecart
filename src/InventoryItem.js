import React from 'react'

const InventoryItem = ({item, addToCart}) => {
    return(
        <li>
            {item.itemName} - ${item.itemPrice} {' '}
            <button type={'button'}
                    disabled={item.inStock === 0}
                    onClick = {()=> addToCart(item.id)}>
                Buy
            </button>
            ({item.selected} selected, {item.inStock} in stock)



        </li>
    )
}

export default InventoryItem