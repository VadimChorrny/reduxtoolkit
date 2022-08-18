import { configureStore } from '@reduxjs/toolkit';
import toolkitSlice from './toolkitSlice';

const { combineReducers } = require('@reduxjs/toolkit');

const rootReducer = combineReducers({
  toolkit: toolkitSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
