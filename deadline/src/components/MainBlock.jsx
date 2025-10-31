import { useState } from 'react';
import { addTodoListAction } from '../actions.js';
import { useDispatch } from 'react-redux';

export function MainBlock() {
  const [todoListName, setTodoListName] = useState('');
  const dispatch = useDispatch();

  function addTodoListButton(text) {
    dispatch(addTodoListAction(text));
    setTodoListName('');
  }

  return (
    <div className="main-block">
      <h1>Создать задание</h1>
      <div className="form">
        <input
          type="text"
          className="main-block-input"
          value={todoListName}
          onChange={(e) => setTodoListName(e.target.value)}
        />
        <button
          className="main-block-button"
          onClick={() => addTodoListButton(todoListName)}
          disabled={todoListName.length === 0}
        >
          Добавить
        </button>
      </div>
    </div>
  );
}
