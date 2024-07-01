import axiosClient from "../_utils/axiosClient";

const getLatestProduct = () => axiosClient.get('/products?populate=*')

export default {
    getLatestProduct
}