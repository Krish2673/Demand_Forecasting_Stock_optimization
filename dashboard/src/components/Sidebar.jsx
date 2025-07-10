import React from "react";

function Sidebar({
  products,
  selected,
  onSelect,
  selectedCategory,
  setSelectedCategory
}) {
  const categories = ["ALL", "FOODS", "HOUSEHOLD", "HOBBIES"];

  const filtered = products.filter((p) =>
    selectedCategory === "ALL"
      ? true
      : p.item_id.startsWith(selectedCategory)
  );

  const sortedProducts = [...filtered].sort((a, b) =>
    a.product_name.localeCompare(b.product_name)
  );

  return (
    <div className="w-64 bg-white border-r shadow-md p-4">
      <h2 className="text-xl font-semibold mb-4">Products</h2>

      {/* Category Filter Dropdown */}
      <select
        className="mb-4 w-full border rounded px-2 py-1 text-sm"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat === "ALL" ? "All Categories" : cat}
          </option>
        ))}
      </select>

      <ul className="space-y-2">
        {sortedProducts.map((p) => {
          const originalIndex = products.findIndex(
            (prod) =>
              prod.item_id === p.item_id && prod.store_id === p.store_id
          );
          return (
            <li
              key={originalIndex}
              onClick={() => onSelect(originalIndex)}
              className={`cursor-pointer p-2 rounded-md ${
                selected === originalIndex
                  ? "bg-blue-100 font-medium"
                  : "hover:bg-gray-100"
              }`}
            >
              {p.product_name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
