import axiosClient from "../_utils/axiosClient";

const getLatestProduct = () => axiosClient.get('/products?populate=*')
const getProductById = (id: string) => axiosClient.get(`/products/${id}?populate=*`)



export default {
    getLatestProduct,
    getProductById
}