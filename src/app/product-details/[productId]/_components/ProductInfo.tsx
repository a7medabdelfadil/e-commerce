// ** In the name of Allah ♥️
'use client'

import { IAddToCartData, IApiResponse, IProduct } from "@/app/interfaces/interface";
import { useState } from 'react';
import { useUser } from "@clerk/nextjs";
import { useRouter } from 'next/navigation'
import CartApis from "@/app/_utils/CartApis";

interface IProductInfoProps {
    productDetails: IProduct;
}

const ProductInfo = ({ productDetails }: IProductInfoProps) => {
    const [quantity, setQuantity] = useState(1);
    const { attributes } = productDetails || {};
    const { title, description, price, instantDelivery, category } = attributes || {};

    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value, 10);
        setQuantity(value > 0 ? value : 1);
    };

    const router = useRouter();
    const { user } = useUser();

    const handleAddCart = () => {
        if (!user) {
            router.push('/sign-in');
        } else if (productDetails) {
            const data: IAddToCartData = {
                data: {
                    username: user.fullName,
                    email: user.primaryEmailAddress?.emailAddress || null, // Set to null if undefined
                    products: [productDetails.id],
                },
            };

            CartApis.addToCart(data)
                .then((res: IApiResponse) => {
                    console.log('cart success', res);
                })
                .catch((err: string) => {
                    console.log('error', err);
                });
        }
    };

    if (!productDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div className="p-4 text-white">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-3xl font-semibold">{title}</h2>
                <div className="flex items-center">
                    <p className="text-primary font-medium mr-4">${price}</p>
                    {instantDelivery ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-green-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-red-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    )}
                    <p className="text-gray-300 ml-2">
                        {instantDelivery ? "Available for instant delivery" : "Requires additional processing time"}
                    </p>
                </div>
            </div>
            <p className="text-gray-200 mb-4 max-w-screen-sm">
                {description ? description.map(desc => desc.children[0].text).join(' ') : ''}
            </p>
            {category && (
                <div className="flex items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 mr-2 text-gray-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                    </svg>
                    <span className="text-sm text-gray-400">{category}</span>
                </div>
            )}

            {/* Quantity and Add to Cart Button */}
            <form className="mt-4 w-full max-w-xs">
                <label htmlFor="quantity" className="block text-gray-100 mb-2">Quantity</label>
                <div className="flex items-center space-x-4">
                    <input
                        type="number"
                        id="quantity"
                        value={quantity}
                        onChange={handleQuantityChange}
                        min="1"
                        placeholder="1"
                        className="w-20 p-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <button onClick={handleAddCart} type="button" className="block w-full rounded bg-primary hover:bg-secondary p-4 text-sm font-medium transition duration-300 hover:scale-105 text-white flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                        </svg>
                        Add to Cart
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ProductInfo;
