import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: ['Купити хліб', 'Купити масло', 'Купити молоко'],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    createTodo(state, action) {
      state.todos.push(action.payload); // work with array
    },
    removeTodo(state, action) {
      state.todos.splice(action.payload, 1); // 2nd parameter means remove one item only
    },
    editTodo(state, action) {},
    removeLastTodo(state) {
      state.todos.pop();
    },
    clearTodos(state) {
      state.todos = [];
    },
  },
});

// Don't forget about export reducers

export default todoSlice.reducer;
export const { createTodo, removeLastTodo, removeTodo } = todoSlice.actions;

// Need make: remove todo by index, edit todo
