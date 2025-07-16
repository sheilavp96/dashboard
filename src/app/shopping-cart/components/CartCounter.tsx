"use client";
import { useState } from "react";
const buttons = [
  { id: 1, label: "+1", action: "increment" },
  { id: 2, label: "-1", action: "decrement" },
];
export const CartCounter = () => {
  const [count, setCount] = useState(0);

  const handleClick = (action: string) => {
    if (action === "increment") {
      setCount((prev) => prev + 1);
    } else {
      setCount((prev) => prev - 1);
    }
  };
  return (
    <>
      <span className="text-9xl">{count}</span>
      <div className="flex items-center justify-center mt-4">
        {buttons.map((button) => (
          <button
            key={button.id}
            className="flex items-center justify-center p-2 rounded-2xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
            onClick={() => handleClick(button.action)}
            disabled={count === 0 && button.action === "decrement" ? true : false}
          >
            {button.label}
          </button>
        ))}
      </div>
    </>
  );
};
