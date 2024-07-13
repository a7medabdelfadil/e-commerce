import { default as axios } from "axios";
import axiosClient from "./axiosClient";
import { IAddToCartData } from "../interfaces/interface";

const addToCart = (payload: IAddToCartData) => axiosClient.post('/carts', payload);

export default {
    addToCart,
}