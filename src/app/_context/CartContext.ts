import { createContext, Dispatch, SetStateAction } from 'react';
import { ICartItem } from '../interfaces/interface';

interface ICartContext {
    cart: ICartItem[];
    setCart: Dispatch<SetStateAction<ICartItem[]>>;
}

export const CartContext = createContext<ICartContext | null>(null);
