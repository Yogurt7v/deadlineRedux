import { useEffect, useState } from 'react';
import { SingleTodo } from './SingleTodo';
import { useDispatch } from 'react-redux';
import { addSingleTodoAction, removeSingleTodoAction } from '../actions.js';

export function ToDoBlock({ state, title, id, removeTodoList }) {
  const [singleTodoTitle, setSingleTodoTitle] = useState('');
  const [todo, setTodo] = useState([]);
  const dispatch = useDispatch();

  function addTodoList() {
    dispatch(addSingleTodoAction({ id, text: singleTodoTitle }));
    setSingleTodoTitle('');
  }
  function removeSingleTodo(key) {
    dispatch(removeSingleTodoAction(key));
  }

  useEffect(() => {
    const blockTodos = state.find((item) => item.id === id)?.todos;
    if (blockTodos) {
      setTodo(blockTodos);
    }
  }, [state, id]);

  return (
    <div className="todo-block">
      <button className="todo-block-closeButton" onClick={() => removeTodoList(id)}>
        X
      </button>
      <h1>{title}</h1>
      <div className="todo-block-form">
        <input
          type="text"
          className="todo-block-input"
          value={singleTodoTitle}
          onChange={(e) => setSingleTodoTitle(e.target.value)}
        />
        <button
          className="todo-block-button"
          disabled={singleTodoTitle.length === 0}
          onClick={() => addTodoList()}
        >
          Добавить задачу
        </button>
      </div>
      <div className="todo-block-list">
        {todo?.map((todo) => (
          <SingleTodo
            title={todo.title}
            completed={todo.completed}
            key={todo.id}
            id={todo.id}
            removeSingleTodo={removeSingleTodo}
          />
        ))}
      </div>
    </div>
  );
}
