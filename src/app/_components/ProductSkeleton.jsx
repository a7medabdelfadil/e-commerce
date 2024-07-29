import React from "react";

const ProductSkeleton = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, index) => (
                <div
                    key={index}
                    className="animate-pulse w-full bg-gray-800 rounded-lg shadow-md overflow-hidden"
                >
                    <div>
                        <div className="h-52 bg-gray-700"></div>
                        <div className="p-4 space-y-4">
                            <div className="flex justify-between">
                                <div className="h-6 w-12 bg-gray-700 rounded"></div>
                                <div className="h-6 w-12 bg-gray-700 rounded"></div>
                            </div>
                            <div className="h-9 w-full bg-primary rounded"></div>
                            <div className="h-9 bg-gray-700 rounded"></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductSkeleton;
