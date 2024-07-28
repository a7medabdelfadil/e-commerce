// ** In the name of Allah ♥️

import { useContext } from "react";
import CartContext from "../_context/CartContext";
import Link from "next/link";

const Cart = () => {
    const { cart } = useContext(CartContext); // Removed setCart if not needed

    console.log('from context', cart);

    return (
        <div className="h-[300px] w-[250px] bg-gray-100 z-10 rounded-md border shadow-sm absolute mx-10 right-10 top-12 p-5 overflow-auto">
            <div className="mt-4 space-y-6">
                <ul className="space-y-4">
                    {cart?.map((item: any) => (
                        <li key={item.id} className="flex items-center gap-4">
                            <img
                                src={item.product?.attributes?.banner?.data?.attributes?.url || 'https://via.placeholder.com/150'}
                                alt={item.product?.attributes?.title || "Product Image"}
                                className="w-16 h-16 object-cover rounded"
                            />
                            <div>
                                <h3 className="text-sm text-gray-900">{item.product?.attributes?.title || 'Product Title'}</h3>
                                <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                                    <div>
                                        <dt className="inline">Category: </dt>
                                        <dd className="inline">{item.product?.attributes?.category || 'N/A'}</dd>
                                    </div>
                                    <div>
                                        <dt className="inline">Price: </dt>
                                        <dd className="inline">{item.product?.attributes?.price || 'N/A'}</dd>
                                    </div>
                                </dl>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="space-y-4 text-center mt-5">
                <Link
                    href="/cart"
                    className="block rounded border border-gray-600 px-5 py-3 text-sm text-gray-600 transition hover:ring-1 hover:ring-gray-400"
                >
                    View my carts ({cart?.length || 0})
                </Link>
                <a
                    href="#"
                    className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
                >
                    Continue shopping
                </a>
            </div>
        </div>
    );
};

export default Cart;
