import Image from 'next/image';
import { IProduct } from "../interfaces/interface";

interface ProductCardProps {
    product: IProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { id, attributes } = product;

    if (!attributes) {
        return null;
    }

    const { title, description, banner } = attributes;

    // Handle cases where banner or its attributes may be undefined
    const bannerImage = banner?.data?.attributes?.formats?.thumbnail;
    const imageSrc = bannerImage?.url || '/placeholder-image.jpg';
    const imageAlt = banner?.data?.attributes.name || 'Product Image';
    const imageWidth = bannerImage?.width || 400;
    const imageHeight = bannerImage?.height || 300;

    // Handle description text
    const descriptionText = description
        ? description.map(desc => desc.children.map(child => child.text).join('')).join('')
        : '';

    return (
        <div key={id}>
            <h2>{title}</h2>
            <p>{descriptionText}</p>
            {bannerImage && (
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={imageWidth}
                    height={imageHeight}
                />
            )}
        </div>
    );
};

export default ProductCard;
