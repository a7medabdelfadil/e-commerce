import Image from 'next/image';
import { IProduct } from "../interfaces/interface";

interface ProductCardProps {
    product: IProduct | undefined; // Define product as possibly undefined
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    if (!product) {
        return null; // Handle case where product is undefined
    }

    const { id, attributes } = product;

    if (!attributes) {
        return null; // Handle case where attributes are undefined
    }

    const { title, price, category, banner } = attributes;

    // Handle cases where banner or its attributes may be undefined
    const bannerImage = banner?.data?.attributes?.formats?.thumbnail;
    const imageSrc = bannerImage?.url || '/placeholder-image.jpg';
    const imageAlt = banner?.data?.attributes.name || 'Product Image';

    return (
        <div className="group relative block overflow-hidden bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            {/* Wishlist button */}
            <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 dark:bg-gray-700 dark:text-gray-100 transition hover:text-gray-900/75">
                <span className="sr-only">Wishlist</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
            </button>

            {/* Product Image */}
            {bannerImage && (
                <div className="relative h-64 sm:h-72 w-full">
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        layout="fill"
                        objectFit="cover"
                        className="group-hover:scale-105 transition duration-500"
                    />
                </div>
            )}

            {/* Product Info */}
            <div className="relative border border-gray-700 border-t-0 bg-background p-6">
                {/* Category */}
                {category && (
                    <div className="flex items-center mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 mr-2 text-gray-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                        </svg>
                        <span className="text-sm text-gray-400">{category}</span>
                    </div>
                )}

                {/* Product Title */}
                <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium text-white">{title}</h3>
                    <p className="text-sm text-gray-300">${price}</p>
                </div>

                {/* Add to Cart Button */}
                <form className="mt-4">
                    <button className="block w-full rounded bg-primary hover:bg-secondary p-4 text-sm font-medium transition duration-300 hover:scale-105 text-white flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                        </svg>
                        Add to Cart
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ProductCard;
