import React, { useState } from "react";

function getAlertColor(alert) {
  if (alert.includes("Understock")) return "text-red-500 font-medium";
  if (alert.includes("Overstock")) return "text-yellow-500";
  return "text-green-600";
}

function AlertsPanel({ data }) {
  const [showOnlyAlerts, setShowOnlyAlerts] = useState(false);

  const filteredForecasts = showOnlyAlerts
    ? data.forecasts.filter(
        (entry) =>
          entry.stock_alert !== "✅ OK" || entry.seasonal_flag !== ""
      )
    : data.forecasts;

  return (
    <div className="bg-white p-4 rounded-xl shadow-md border border-blue-100">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold text-blue-700">
          Inventory Alerts
        </h3>
        <label className="flex items-center text-sm space-x-2">
          <input
            type="checkbox"
            checked={showOnlyAlerts}
            onChange={() => setShowOnlyAlerts((prev) => !prev)}
            className="accent-blue-500"
          />
          <span>Only show alerts/spikes</span>
        </label>
      </div>
      <ul className="max-h-[300px] overflow-y-auto divide-y">
        {filteredForecasts.map((entry, idx) => (
          <li key={idx} className="py-2 flex justify-between items-center">
            <span className="text-sm text-gray-500">{entry.date}</span>
            <span className={getAlertColor(entry.stock_alert)}>
              {entry.stock_alert}
            </span>
            <span className="text-xs text-emerald-500">
              {entry.seasonal_flag}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AlertsPanel;
