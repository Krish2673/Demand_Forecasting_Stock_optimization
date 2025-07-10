import React from "react";

function SummaryPanel({ data }) {
  const avgSales = (
    data.forecasts.reduce((sum, d) => sum + d.predicted_sales, 0) /
    data.forecasts.length
  ).toFixed(2);

  const understockCount = data.forecasts.filter(d =>
    d.stock_alert.includes("Understock")
  ).length;

  const overstockCount = data.forecasts.filter(d =>
    d.stock_alert.includes("Overstock")
  ).length;

  const seasonalCount = data.forecasts.filter(d => d.seasonal_flag).length;

  return (
    <div className="bg-white p-4 rounded-xl shadow-md border border-blue-100 mb-4 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div>
        <div className="text-sm text-gray-500">Avg. Predicted Sales</div>
        <div className="text-lg font-semibold text-blue-700">{avgSales}</div>
      </div>
      <div>
        <div className="text-sm text-gray-500">Understock Alerts</div>
        <div className="text-lg font-semibold text-red-500">{understockCount}</div>
      </div>
      <div>
        <div className="text-sm text-gray-500">Overstock Alerts</div>
        <div className="text-lg font-semibold text-yellow-500">{overstockCount}</div>
      </div>
      <div>
        <div className="text-sm text-gray-500">Seasonal Spikes</div>
        <div className="text-lg font-semibold text-green-600">{seasonalCount}</div>
      </div>
    </div>
  );
}

export default SummaryPanel;
