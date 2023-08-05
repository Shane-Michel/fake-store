import { useState, createContext, useEffect } from "react";
// use hook to create context
export const CartContext = createContext();

export default function CartContextProvider(props) {
    //create global state
    const [items, setItems] = useState([]);

    const [isInCart, setIsInCart] = useState(false);

    useEffect(
        ()=> {
            // check local storage for initial value
            const storedItemsList = localStorage.getItem('itemsList')
            if (storedItemsList) {
                // use this value to initialize state
                setItems(JSON.parse(storedItemsList))
            }
        }, [] //run once 
    )
    

    useEffect(
        ()=> {
            // save state to local storage
            localStorage.setItem('itemsList', JSON.stringify(items))
        }, [items] 
    )

    const addItems = (itemsToAdd) => {
        console.log([...items, itemsToAdd])
        // add this object to items
        setItems([...items, itemsToAdd]);
    }

    const removeItems = (itemsId) => {
        // remove from items
        setItems(items.filter(item => item.id !== itemsId))
    }

    return(
        <CartContext.Provider value={{items, addItems, removeItems, isInCart, setIsInCart, setItems}}>
            {props.children}
        </CartContext.Provider>
    )
}