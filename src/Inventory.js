import React from 'react'
import InventoryItem from './InventoryItem'

const Inventory = ({items, addToCart}) => {

    const itemList = items.map((item) => {
        return(
            <InventoryItem item={item} addToCart={addToCart}/>
        )
    })

    return(
        <div>
            <h3>Inventory</h3>
            <ul>
                {itemList}
            </ul>
        </div>
    )
}

export default Inventory