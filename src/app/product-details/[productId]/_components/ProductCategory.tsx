import React, { useEffect, useState } from 'react';
import ProductApi from '@/app/_components/ProductApi';
import { IProduct } from '@/app/interfaces/interface';
import ProductList from '@/app/_components/ProductList';

interface IProps {
    category: string | undefined;
}

const ProductCategory: React.FC<IProps> = ({ category }) => {
    const [productList, setProductList] = useState<IProduct[] | null>(null);

    useEffect(() => {
        if (category) {
            getProductByCategory(category);
        }
    }, [category]);

    const getProductByCategory = (category: string | undefined) => {
        ProductApi.getProductsByCategory(category)
            .then(res => {
                setProductList(res.data.data);
            })
            .catch(err => {
                console.error('Error fetching products by category:', err);
                setProductList(null); // Optional: Set state to null or handle error state
            });
    };

    return (
        <div className="px-10 md:px-20 rounded-lg bg-background">
            <h1 className="mb-5 text-3xl sm:text-4xl md:text-5xl font-bold text-white bg-clip-text">
                Similar Products
            </h1>
            <ProductList productList={productList} />
        </div>
    );
};

export default ProductCategory;
