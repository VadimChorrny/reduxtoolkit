import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTodo, removeTodo } from '../store/todo/slice';
import '../styles/todo/todo.css'; // import styles

function Todo() {
  const todos = useSelector((store) => store.todo.todos);
  const dispatch = useDispatch();

  //state
  const [todo, setTodo] = useState('');

  return (
    <div className='todo__container'>
      <h1>Todo list</h1>
      <div className='todo__container_items'>
        {todos.length > 0 ? (
          todos.map((todo, idx) => (
            <div
              key={idx}
              className='item'
              onClick={() => dispatch(removeTodo(idx))}
            >
              <span>✅</span>
              {todo}{' '}
            </div>
          ))
        ) : (
          <div>List is empty🫗</div>
        )}
      </div>
      <div className='todo__container_input'>
        <div className='input__block'>
          <input
            type='text'
            placeholder='Enter your todo 😇'
            onChange={(event) => {
              setTodo(event.target.value);
            }}
            value={todo}
          />
        </div>
        <button
          onClick={() => {
            todo === '' ? alert('Error!') : dispatch(createTodo(todo));
            setTodo('');
          }}
        >
          Create
        </button>
      </div>
    </div>
  );
}

export default Todo;
