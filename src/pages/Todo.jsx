import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addTodo,
  removeLastTodo,
  increment,
  decrement,
} from '../store/toolkitSlice';

function Todo() {
  const count = useSelector((state) => state.toolkit.count);
  const todos = useSelector((state) => state.toolkit.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(removeLastTodo())}>
        Remove last todo
      </button>
      <button onClick={() => dispatch(addTodo(prompt()))}>Create todo</button>
      <br />
      <h3>Todos</h3>
      <ul>
        {todos.length > 0 ? (
          todos.map((todo, idx) => <li key={idx}>{todo}</li>)
        ) : (
          <h1>List is empty</h1>
        )}
      </ul>
    </div>
  );
}

export default Todo;
