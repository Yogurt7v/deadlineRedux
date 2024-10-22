import { useSelector } from 'react-redux';
import './App.css';
import { MainBlock } from './components/MainBlock';
import { ToDoBlock } from './components/ToDoBlock';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeTodoListAction } from './actions';

function App() {
  const [allTodoBlocks, setAllTodoBlocks] = useState([]);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    setAllTodoBlocks(state);
  }, [state]);

  function removeTodoList(id) {
    dispatch(removeTodoListAction(id));
  }

  return (
    <>
      <MainBlock />
      <div className="todo-blocks-container">
        {allTodoBlocks?.map((item, index) => (
          <ToDoBlock
            state={state}
            title={item.title}
            key={index}
            removeTodoList={removeTodoList}
            id={item.id}
          />
        ))}
      </div>
    </>
  );
}

export default App;
