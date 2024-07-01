import { IProduct } from "../interfaces/interface";
import ProductCard from "./ProductCard";

interface ProductListProps {
    productList: IProduct[];
}

const ProductList: React.FC<ProductListProps> = ({ productList }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {productList.map(product => (
                <div key={product.id} className="mb-4">
                    <ProductCard product={product} />
                </div>
            ))}
        </div>
    );
};

export default ProductList;
