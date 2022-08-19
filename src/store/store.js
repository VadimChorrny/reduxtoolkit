import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './todo/slice';

const { combineReducers } = require('@reduxjs/toolkit');

const rootReducer = combineReducers({
  todo: todoSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
