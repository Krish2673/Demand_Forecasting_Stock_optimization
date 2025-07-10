import React from "react";

function ProductInfo({ product }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-700 mb-2">Product Details</h2>
      <div className="text-base text-gray-600 space-y-1">
        <p><strong>Name:</strong> {product.product_name}</p>
        <p><strong>Item ID:</strong> {product.item_id}</p>
        <p><strong>Store ID:</strong> {product.store_id}</p>
      </div>
    </div>
  );
}

export default ProductInfo;