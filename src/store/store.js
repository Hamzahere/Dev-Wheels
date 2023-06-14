import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const store = configureStore({
    reducer: rootReducer,
    // Enable Redux DevTools Extension
    devTools: process.env.NODE_ENV !== 'production',
  });

  export default store;