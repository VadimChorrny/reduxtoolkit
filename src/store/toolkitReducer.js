import { createReducer, createAction } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  todos: ['Buy milk', 'Make a video', 'Call to my mom', 'Study toolkit'],
};

export const increment = createAction('INCREMENT');
export const decrement = createAction('DECREMENT');

export default createReducer(initialState, {
  [increment]: function (state) {
    // can be arrow function
    state.count = state.count + 1;
  },
  [decrement]: (state) => {
    // can be arrow function
    state.count = state.count - 1;
  },
});

console.log(decrement);
