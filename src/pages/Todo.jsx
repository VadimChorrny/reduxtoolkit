import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTodo, removeTodo } from '../store/todo/slice';
import '../styles/todo/todo.css'; // import styles
import TodoList from './TodoList';

function Todo() {
  const todos = useSelector((store) => store.todo.todos);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  //state
  const [todo, setTodo] = useState('');

  return (
    <div className='todo__container'>
      <h1>Todo list</h1>
      <TodoList />
      <div className='todo__container_input'>
        {show && (
          <div id='myModal' className='modal'>
            <div className='modal-content'>
              <span
                className='close'
                onClick={() => {
                  setShow(false);
                }}
              >
                &times;
              </span>
              <div className='input__block'>
                <input
                  type='text'
                  placeholder='Enter your todo 😇'
                  onChange={(event) => {
                    setTodo(event.target.value);
                  }}
                  value={todo}
                />
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
          </div>
        )}
        <button
          onClick={() => {
            // todo === '' ? alert('Error!') : dispatch(createTodo(todo));
            // setTodo('');
            setShow(true);
          }}
        >
          Create
        </button>
      </div>
    </div>
  );
}

export default Todo;
