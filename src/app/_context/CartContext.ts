import { createContext } from "react";

let context: any = null;

let CartContext = createContext<any>(context);

export default CartContext;
