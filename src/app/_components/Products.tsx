// ** In the name of Allah ♥️
'use client'

import { useEffect, useState } from "react";
import ProductApi from "./ProductApi";
import ProductList from "./ProductList";
import { IProduct } from "../interfaces/interface";

const ProductSection = () => {
    const [productList, setProductList] = useState<IProduct[]>([]);

    useEffect(() => {
        getLatestProducts();
    }, []);

    const getLatestProducts = () => {
        ProductApi.getLatestProduct().then(
            res => {
                setProductList(res.data.data);
            }
        ).catch(error => {
            console.error("Error fetching products:", error);
        });
    }

    return (
        <div>
            <h1>Products</h1>
            <ProductList productList={productList} />
        </div>
    )
};

export default ProductSection;
