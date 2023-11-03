import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './index';

export const store = () => {
  const middlewares = [createSagaMiddleware()];

  return configureStore({
    reducer: rootReducer,
    middleware: middlewares,
    // devTools: process.env.NEXT_PUBLIC_NODE_ENV === 'development',
    devTools: process.env.NODE_ENV === 'development',
  });
};

export default store;
