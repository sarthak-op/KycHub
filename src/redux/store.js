import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

const store = configureStore({
  reducer: rootReducer,
  // You can add middleware, devTools configuration, etc. here if needed
});

export default store;
