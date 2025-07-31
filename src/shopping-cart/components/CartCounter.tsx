"use client";
import { useAppDispatch, useAppSelector } from "@/store";
import { addOne, initCounterState, substractOne } from "@/store/counter/counterSlice";
import { useEffect } from "react";
interface Props {
  value?: number;
}
interface CounterResponse {
  methot: string;
  count: number;
}
const buttons = [
  { id: 2, label: "-1", action: "decrement" },
  { id: 1, label: "+1", action: "increment" },
];

const getApiCounter = async (): Promise<CounterResponse> => {
  const data = await fetch("/api/counter").then((res) => res.json());
  console.log(data);
  return data;
};
export const CartCounter = ({ value = 0 }: Props) => {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();
  // useEffect(() => {
  //   dispatch(initCounterState(value));
  // }, [dispatch, value]);

  useEffect(() => {
    getApiCounter().then(({ count }) => dispatch(initCounterState(count)));
  }, [dispatch]);

  return (
    <>
      <span className="text-9xl">{count}</span>
      <div className="flex items-center justify-center mt-4">
        {buttons.map((button) => (
          <button
            key={button.id}
            className="flex items-center justify-center p-2 rounded-2xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
            onClick={() =>
              button.action === "increment"
                ? dispatch(addOne())
                : dispatch(substractOne())
            }
            disabled={count === 0 && button.action === "decrement" ? true : false}
          >
            {button.label}
          </button>
        ))}
      </div>
    </>
  );
};
