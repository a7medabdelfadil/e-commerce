// ** In the name of Allah ♥️
'use client'

import { useEffect } from 'react';
import ProductApi from '@/app/_components/ProductApi';
import BreadCrumbs from '@/app/_components/BreadCrumbs';
import ProductBanner from './_components/ProductBanner';
import ProductInfo from './_components/ProductInfo';


interface ProductDetailsProps {
    params: {
        productId: string;
    };
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ params }) => {
    const [productDetails, setProductDetails] = useState({})
    
    useEffect(() => {
        getProductById_(params?.productId);
    }, [params?.productId]);

    const getProductById_ = (prop: string) => {
        ProductApi.getProductById(prop).then(
            res => {
                console.log(res.data.data);
                setProductDetails(res.data.data)
            }
        ).catch(error => {
            console.error("Error fetching products:", error);
        });
    }
    return (
        <div>
            <div className='flex justify-center py-5 bg-background'>
                <BreadCrumbs />
            </div>
            <div className='flex flex-col md:flex-row justify-around'>
                <ProductBanner />
                <ProductInfo />
            </div>
            <h1>{params.productId}</h1>
        </div>
    );
};

export default ProductDetails;
