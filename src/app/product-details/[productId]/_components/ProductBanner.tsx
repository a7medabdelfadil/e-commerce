import { IProduct } from "@/app/interfaces/interface";
import Image from "next/image";

interface IProductDetails {
    productDetails: IProduct;
}

const ProductBanner = ({ productDetails }: IProductDetails) => {
    const { id, attributes } = productDetails;
    const { title, banner } = attributes;

    const bannerImage = banner?.data?.attributes?.formats?.thumbnail;
    const imageSrc = bannerImage?.url || '/placeholder-image.jpg';
    const imageAlt = banner?.data?.attributes?.name || 'Product Image';

    return (
        <div className="text-center my-4">
            <div className="relative w-full h-96">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    className="rounded-lg shadow-lg"
                    width={500}
                    height={500}
                    style={{
                        maxWidth: "100%",
                        height: "auto"
                    }} />
            </div>
        </div>
    );
};

export default ProductBanner;
