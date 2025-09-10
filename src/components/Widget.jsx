export default function Widget({ widget, onRemove }) {
  return (
    <div className="bg-white shadow p-4 rounded-lg flex justify-between items-center">
      <div>
        <h3 className="font-bold">{widget.name}</h3>
        <p className="text-gray-600">{widget.text}</p>
      </div>
      <button
        onClick={onRemove}
        className="text-red-500 font-bold hover:text-red-700 cursor-pointer"
      >
        ✕
      </button>
    </div>
  );
}
