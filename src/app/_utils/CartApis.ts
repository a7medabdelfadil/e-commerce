import axiosClient from "./axiosClient";
import { IAddToCartData } from "../interfaces/interface";

const addToCart = (payload: IAddToCartData) => axiosClient.post('/carts', payload);
const getUserCartItems = (email: string | undefined) => axiosClient.get(`/carts?populate[products][populate]=banner&filters[email][$eq]=${email}`);
const deleteCartItem = (id: string | undefined) => axiosClient.delete(`/carts/${id}`);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    addToCart,
    getUserCartItems,
    deleteCartItem,
}