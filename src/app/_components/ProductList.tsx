import { IProduct } from "../interfaces/interface";
import ProductCard from "./ProductCard";

interface ProductListProps {
    productList: IProduct[];
}

const ProductList: React.FC<ProductListProps> = ({ productList }) => {
    return (
        <div>
            {productList.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
