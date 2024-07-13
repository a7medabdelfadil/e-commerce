import axiosClient from "../_utils/axiosClient";

const getLatestProduct = () => axiosClient.get('/products?populate=*')
const getProductById = (id: string) => axiosClient.get(`/products/${id}?populate=*`)
const getProductsByCategory = (category: string | undefined) => axiosClient.get(`/products?filters[category][$eq]=${category}&populate=*`)

export default {
    getLatestProduct,
    getProductById,
    getProductsByCategory
}