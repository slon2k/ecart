import React from 'react';
import Cart from './Cart'
import Inventory from './Inventory'
import './App.css';

export default class App extends React.Component  {

    state = {
        items: [
            {id: 1, itemName: 'Apple', itemPrice: 10, selected: 0, inStock: 11},
            {id: 2, itemName: 'Melon', itemPrice: 20, selected: 0, inStock: 5},
            {id: 3, itemName: 'Orange', itemPrice: 8, selected: 0, inStock: 20},
        ]
    }

    addToCart = (id) => {
        const {items} = this.state;
        const index = items.findIndex((item) => item.id === id);
        if (index > -1) {
            if (items[index].inStock > 0) {
                items[index].selected = items[index].selected + 1;
                items[index].inStock = items[index].inStock - 1;
                this.setState({item: items});
            }
        }
    }

    removeFromCart = (id) => {
        const {items} = this.state;
        const index = items.findIndex((item) => item.id === id);
        if (index > -1) {
            if (items[index].selected > 0) {
                items[index].selected = items[index].selected - 1;
                items[index].inStock = items[index].inStock + 1;
                this.setState({item: items});
            }
        }
    }

    checkoutItem(id, qty) {
        const {items} = this.state;
        const index = items.findIndex((item) => item.id === id);
        if (index > -1) {
            if (items[index].selected >= qty) {
                items[index].selected = items[index].selected - qty;
                this.setState({item: items});
            }
        }
    }

    checkout = (cartItems) => {
        for (let i = 0; i < cartItems.length; i++) {
            this.checkoutItem(cartItems[i].id, cartItems[i].selected)
        }
    }

    render () {
        const {items} = this.state;
        const cartItems = items.filter((item) => item.selected > 0)

        return (
            <div>
                <Cart items = {cartItems}
                      addToCart={this.addToCart}
                      checkout = {this.checkout}
                      removeFromCart={this.removeFromCart}/>
                <hr/>
                <Inventory items={items}
                           addToCart={this.addToCart} />
            </div>
        )
    }
}
