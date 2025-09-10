import { useState } from "react";
import useWidgetStore from "../store/widgetStore";

export default function WidgetManager() {
  const { categories, removeWidget } = useWidgetStore();
  const [search, setSearch] = useState("");

  const filteredCategories = Object.keys(categories).reduce((acc, cat) => {
    acc[cat] = categories[cat].filter((w) =>
      w.name.toLowerCase().includes(search.toLowerCase())
    );
    return acc;
  }, {});

  return (
    <div className="bg-white p-6 shadow rounded-lg mb-6">
      <h2 className="text-xl font-bold mb-4">Widget Manager</h2>
      <input
        type="text"
        placeholder="Search widgets..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded w-full mb-4"
      />

      {Object.keys(filteredCategories).map((cat) => (
        <div key={cat} className="mb-4">
          <h3 className="font-semibold">{cat}</h3>
          <ul className="ml-4">
            {filteredCategories[cat].map((widget) => (
              <li
                key={widget.id}
                className="flex justify-between items-center py-1"
              >
                <span>{widget.name}</span>
                <button
                  onClick={() => removeWidget(cat, widget.id)}
                  className="text-red-500 hover:text-red-700 cursor-pointer"
                >
                  ✕ Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
