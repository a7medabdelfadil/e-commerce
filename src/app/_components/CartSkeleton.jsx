import React from "react";

const CartSkeleton = () => {
  return (
    <div className="mb-20 p-4 mr-10 text-white flex flex-col justify-between">
      <div>
        <div className="flex justify-center gap-28 mb-4 animate-pulse flex-col md:flex-row">
          <div className="h-[250px] w-[400px]  bg-gray-700 rounded"></div>
          <div className="flex items-between">
            <div className="flex flex-col">
              <div className="flex justify-between">
                <div className="h-9 w-16 bg-gray-700 rounded mr-4"></div>
                <div className="flex">
                  <div className="h-9 w-16 bg-primary rounded-4"></div>
                  <div className="h-9 w-40 bg-gray-700 rounded ml-2"></div>
                </div>
              </div>
              <div className="my-5 h-[50px] w-[600px] bg-gray-700 rounded"></div>
            <div className="h-9 w-16 bg-gray-700 rounded mr-4"></div>
              <div className="my-5 h-[50px] w-[300px] bg-primary rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartSkeleton;
