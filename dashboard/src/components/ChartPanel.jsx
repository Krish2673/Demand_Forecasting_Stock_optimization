import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

function CustomDot({ cx, cy, payload }) {
  if (payload.seasonal_flag) {
    return (
      <circle cx={cx} cy={cy} r={5} stroke="green" strokeWidth={2} fill="white" />
    );
  }
  return null;
}

function ChartPanel({ data }) {
  const handleDownload = () => {
    const csvRows = [
      ["Date", "Predicted Sales", "Stock Alert", "Seasonal Flag"]
    ];

    data.forecasts.forEach((row) => {
      csvRows.push([
        row.date,
        row.predicted_sales,
        row.stock_alert,
        row.seasonal_flag
      ]);
    });

    const csvContent = csvRows.map((e) => e.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `${data.product_name.replace(/\s+/g, "_")}_forecast.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md border border-blue-100">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold text-blue-700">
          {data.product_name} — Sales Forecast
        </h3>
        <button
          onClick={handleDownload}
          className="text-sm px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Download CSV
        </button>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data.forecasts}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="predicted_sales"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={<CustomDot />}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartPanel;
