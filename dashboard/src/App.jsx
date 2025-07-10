import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import ChartPanel from "./components/ChartPanel";
import AlertsPanel from "./components/AlertsPanel";
import dashboardData from "./data/dashboard_data.json";
import SummaryPanel from "./components/SummaryPanel";
import ProductInfo from "./components/ProductInfo";

function App() {
  const [selectedProductIndex, setSelectedProductIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const selectedProduct = dashboardData[selectedProductIndex];

  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar
        products={dashboardData}
        selected={selectedProductIndex}
        onSelect={setSelectedProductIndex}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div className="flex-1 p-6 overflow-auto">
        <h1 className="text-2xl font-bold mb-4">AI Forecast Dashboard</h1>
        <div className="space-y-4 mb-4">
          <ProductInfo product={selectedProduct} />
          <SummaryPanel data={selectedProduct} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <ChartPanel data={selectedProduct} />
          <AlertsPanel data={selectedProduct} />
        </div>
      </div>
    </div>
  );
}

export default App;
