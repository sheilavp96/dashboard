import React from "react";
import { SidebarMenuItem } from "./SidebarMenuItem";
import {
  IoBrowsersSharp,
  IoCalculatorOutline,
  IoFootball,
  IoLogoReact,
} from "react-icons/io5";
import Image from "next/image";

const menuItems = [
  {
    path: "/dashboard/main",
    icon: <IoBrowsersSharp size={40} />,
    title: "Dashboard",
    subtitle: "Data Overview",
  },
  {
    path: "/dashboard/counter",
    icon: <IoCalculatorOutline size={40} />,
    title: "Counter",
    subtitle: "Contador",
  },
  {
    path: "/dashboard/pokemons",
    icon: <IoFootball size={40} />,
    title: "Lista de Pokemons",
    subtitle: "Visualiza los pokemons disponibles",
  },
];
export const Sidebar = () => {
  return (
    <div
      style={{ width: "400px" }}
      id="menu"
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64  left-0 overflow-y-scroll"
    >
      <div id="logo" className="px-6 py-10">
        <h1 className="flex items-center text-2xl font-bold px-6 py-10">
          <IoLogoReact className="mr-2" />
          <span>Dash</span>
          <span className="text-blue-500">Board</span>
        </h1>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full w-8 h-8"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"
              alt=""
            />
          </span>
          <span className="text-sm md:text-base font-bold">Edward Tompson</span>
        </a>
      </div>
      <div id="nav" className="w-full px-6">
        <div className="flex flex-col">
          {menuItems.map((item, index) => (
            <SidebarMenuItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
