import { create } from "zustand";
import Widgetdata from '../data/widgets.json';

const useWidgetStore = create((set) => ({
  categories: Widgetdata,

  addWidget: (category, widget) =>
    set((state) => ({
      categories: {
        ...state.categories,
        [category]: [...(state.categories[category] || []), widget],
      },
    })),

  removeWidget: (category, widgetId) =>
    set((state) => ({
      categories: {
        ...state.categories,
        [category]: state.categories[category].filter((w) => w.id !== widgetId),
      },
    })),
}));

export default useWidgetStore;
