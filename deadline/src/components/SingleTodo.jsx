import { useState } from 'react';

export function SingleTodo({ title, completed, id, removeSingleTodo }) {
  const [checked, setChecked] = useState(completed);

  return (
    <div className="single-todo" key={id}>
      <input
        type="checkbox"
        name=""
        id=""
        value={checked}
        onChange={() => {
          console.log(checked);
          setChecked(!checked);
        }}
      />
      <p className={checked ? 'checked' : ''}>{title}</p>
      <button onClick={() => removeSingleTodo(id)}>Удалить</button>
    </div>
  );
}
