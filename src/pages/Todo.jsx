import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../store/toolkitReducer';

function Todo() {
  const count = useSelector((state) => state.toolkit.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      {/* <button onClick={() => dispatch()}>Remove last todo</button> */}
      {/* <button onClick={() => dispatch()}>Create todo</button> */}
    </div>
  );
}

export default Todo;
