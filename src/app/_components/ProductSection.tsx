// ** In the name of Allah ♥️
'use client'

import { useEffect, useState } from "react";
import ProductApi from "./ProductApi";
import { IProduct } from "../interfaces/interface";
import ProductList from "./ProductList";

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
        <div className="px-10 md:px-20 rounded-lg bg-background">
            <h1 className="mb-5 text-3xl sm:text-4xl md:text-5xl font-bold text-white bg-clip-text">
                Our Latest Products
            </h1>
            <ProductList productList={productList} />
        </div>

    )
};

export default ProductSection;
