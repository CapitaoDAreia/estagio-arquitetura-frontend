import React, { Children, createContext, useState } from "react";
import { ProductTypes } from "../pages/Home";

interface CartProps{
    children: React.ReactNode;
}
interface CartContextProps {
    cart: ProductTypes[],
}

const CartContext = createContext<CartContextProps | null>(null);

export const CartProvider = ({ children }:CartProps)=>{
    const [cart, setCart] = useState<ProductTypes[]>([]);

    const value = React.useMemo(
        ()=>({cart, setCart}), 
        [cart, setCart]
    );

    return(
        <CartContext.Provider value={value} >
            {children}
        </CartContext.Provider>
    )
}