"use client";
import { useAppSelector } from "@/store";
import { SimpleWidget } from "./SimpleWidget";
import { IoAirplaneOutline, IoCafe } from "react-icons/io5";
const getWidgets = (count: number) => [
  {
    id: "1",
    title: count,
    label: "Prueba",
    icon: <IoAirplaneOutline size={50} className="text-blue-300" />,
  },
  {
    id: "2",
    title: "Contador",
    label: "Prueba",
    icon: <IoCafe size={50} color="orange" />,
  },
];

export const WidgetsGrid = () => {
  const count = useAppSelector((state) => state.counter.count);
  const widgets = getWidgets(count);

  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
      {widgets.map(({ id, label, title, icon }) => (
        <SimpleWidget key={id} icon={icon} title={`${title}`} label={label} />
      ))}
    </div>
  );
};
