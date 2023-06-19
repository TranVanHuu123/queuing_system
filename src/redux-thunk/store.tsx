import { configureStore } from "@reduxjs/toolkit";
import deviceReducer from "./slice/deviceDetailSlice";
import serviceReducer from "./slice/serviceSlice";

export const store = configureStore({
  reducer: {
    device: deviceReducer,
    service: serviceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
