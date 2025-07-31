import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface CounterState {
  count: number;
  isReady: boolean;
}
const initialState: CounterState = {
  count: 5,
  isReady: false,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    initCounterState(state, action: PayloadAction<number>) {
      //STATE: es el estado actual
      if (!state.isReady) {
        state.count = action.payload;
        state.isReady = true;
      }
    },
    addOne(state) {
      state.count++;
    },
    substractOne(state) {
      if (state.count === 0) return;
      state.count--;
    },
    resetCount(state, action: PayloadAction<number>) {
      //asignar un nuevo valor
      if (action.payload < 0) {
        action.payload = 0;
      }
      state.count = action.payload;
    },
  },
});

export const { addOne, substractOne, resetCount, initCounterState } =
  counterSlice.actions;

export default counterSlice.reducer;
