'use client'
import { useEffect, useState } from 'react';
import ProductApi from '@/app/_components/ProductApi';
import BreadCrumbs from '@/app/_components/BreadCrumbs';
import ProductBanner from './_components/ProductBanner';
import ProductInfo from './_components/ProductInfo';
import { IProduct } from '@/app/interfaces/interface';
import ProductCategory from './_components/ProductCategory';
import Divider from '@/app/_components/Divider';

interface ProductDetailsProps {
    params: {
        productId: string;
    };
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ params }) => {
    const [productDetails, setProductDetails] = useState<IProduct | null>(null);

    useEffect(() => {
        if (params?.productId) {
            getProductById(params.productId);
        }
    }, [params?.productId]);

    const getProductById = async (productId: string) => {
        try {
            const res = await ProductApi.getProductById(productId);
            setProductDetails(res.data.data);
        } catch (error) {
            console.error("Error fetching product details:", error);
        }
    };

    return (
        <div className="bg-gray-900 min-h-screen text-white">
            <div className='flex justify-center py-5 bg-background'>
                <BreadCrumbs currentCourse={productDetails?.attributes?.title} id={params?.productId}  />
            </div>
            <div className='flex flex-col md:flex-row justify-around items-start gap-4 max-w-screen-xl mx-auto px-4'>
                {productDetails && (
                    <>
                        <ProductBanner productDetails={productDetails} />
                        <ProductInfo productDetails={productDetails} />
                    </>
                )}

            </div>
            <Divider />
            
            <ProductCategory category={productDetails?.attributes.category} />
        </div>
    );
};

export default ProductDetails;
