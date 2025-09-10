import { useState } from "react";
import Widget from "./Widget";
import useWidgetStore from "../store/widgetStore";

export default function Category({ title }) {
  const { categories, addWidget, removeWidget } = useWidgetStore();
  const [newName, setNewName] = useState("");
  const [newText, setNewText] = useState("");

  const handleAdd = () => {
    if (!newName || !newText) return;
    addWidget(title, {
      id: Date.now(),
      name: newName,
      text: newText,
    });
    setNewName("");
    setNewText("");
  };

  return (
    <div className="bg-gray-100 p-6 rounded-xl shadow-md mb-6">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {categories[title]?.map((widget) => (
          <Widget
            key={widget.id}
            widget={widget}
            onRemove={() => removeWidget(title, widget.id)}
          />
        ))}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Widget Name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          className="border rounded p-2 flex-1"
        />
        <input
          type="text"
          placeholder="Widget Text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          className="border rounded p-2 flex-1"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 cursor-pointer"
        >
          + Add Widget
        </button>
      </div>
    </div>
  );
}
