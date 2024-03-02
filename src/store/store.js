import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import { watchFetchCars } from "./CarSaga";
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
  // Enable Redux DevTools Extension
  devTools: process.env.NODE_ENV !== "production",
});

sagaMiddleware.run(watchFetchCars); // Run the saga watcher for fetchCars

export default store;
