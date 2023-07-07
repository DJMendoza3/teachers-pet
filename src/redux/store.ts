import { configureStore } from "@reduxjs/toolkit";
import windowReducer from "./slices/windowSlice";
import testReducer from "./slices/testSlice";

export const store = configureStore({
  reducer: {
    window: windowReducer,
    test: testReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
