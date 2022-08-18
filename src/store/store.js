import toolkitReducer from './toolkitReducer';
import { configureStore } from '@reduxjs/toolkit';

const { combineReducers } = require('@reduxjs/toolkit');

const rootReducer = combineReducers({
  toolkit: toolkitReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
