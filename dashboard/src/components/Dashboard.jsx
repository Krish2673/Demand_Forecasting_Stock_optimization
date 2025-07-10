import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import ChartPanel from "./ChartPanel";
import AlertPanel from "./AlertPanel";
import dashboardData from "./dashboard_data.json";

export default function Dashboard() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    setProducts(dashboardData);
    setSelectedProduct(dashboardData[0]);
  }, []);

  return (
    <div className="flex h-screen">
      <Sidebar
        products={products}
        onSelect={setSelectedProduct}
        selectedId={
          selectedProduct
            ? selectedProduct.item_id + "_" + selectedProduct.store_id
            : null
        }
      />
      <div className="flex-1 flex flex-col p-4 overflow-y-auto">
        {selectedProduct ? (
          <>
            <h1 className="text-xl font-bold mb-2">
              {selectedProduct.product_name}
            </h1>
            <p className="text-sm text-gray-600 mb-4">
              {selectedProduct.item_id} | {selectedProduct.store_id}
            </p>
            <ChartPanel data={selectedProduct.forecasts} />
            <AlertPanel data={selectedProduct.forecasts} />
          </>
        ) : (
          <p>Select a product from the sidebar</p>
        )}
      </div>
    </div>
  );
}
