// ** In the name of Allah ♥️
'use client'

import React, { useEffect, useState } from 'react';
import ProductApi from "./ProductApi";
import { IProduct } from "../interfaces/interface";
import ProductList from "./ProductList";
import ProductSkeleton from "./ProductSkeleton";
import Divider from './Divider';

const ProductSection = () => {
    const [productList, setProductList] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getLatestProduct_();
    }, []);

    const getLatestProduct_ = async () => {
        try {
            const res = await ProductApi.getLatestProduct();
            setProductList(res.data.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="px-10 md:px-20 rounded-lg bg-background">
            <h1 className="mb-5 text-3xl sm:text-4xl md:text-5xl font-bold text-white bg-clip-text">
                Our Courses
            </h1>
            {loading ? (
                <ProductSkeleton />
            ) : (
                <div>
                    <ProductList productList={productList} />
                    <Divider />
                </div>
            )}
        </div>
    );
};

export default ProductSection;
