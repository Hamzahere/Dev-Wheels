import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import { watchFetchCars } from "./CarSaga";
import { watchCreateBooking } from "./BookingSaga";
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
  // Enable Redux DevTools Extension
  devTools: process.env.NODE_ENV !== "production",
});

sagaMiddleware.run(watchFetchCars); // Run the saga watcher for fetchCars
sagaMiddleware.run(watchCreateBooking); // Run the saga watcher for booking

export default store;
