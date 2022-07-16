import React, { createContext, useState } from 'react'
import ItemDetails from '../ItemDetails'


export const CartContext = createContext ([])

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState ([])
    console.log("llega a context",items);
    const isInCart = (id) => {

    }

    const addItem = (item, qty) => {
        console.log("llega a context",item);
        console.log(qty);
        setItems ([...items, {id: item.id, title: item.title, price: item.price, qty: qty }]);
        console.log(items) 
    }

    return (
        < CartContext.Provider value={{ items, addItem }}>
            {children}
        </ CartContext.Provider >
    )
}