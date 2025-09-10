import Category from "./Category";
import WidgetManager from "./WidgetManager";
import useWidgetStore from "../store/widgetStore";

export default function Dashboard() {
  const { categories } = useWidgetStore();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <WidgetManager />
      {Object.keys(categories).map((cat) => (
        <Category key={cat} title={cat} />
      ))}
    </div>
  );
}
