export function addTodoListAction(text) {
  return {
    type: 'ADD',
    payload: text,
  };
}

export function removeTodoListAction(id) {
  return {
    type: 'REMOVE',
    payload: id,
  };
}

export function addSingleTodoAction(payload) {
  return {
    type: 'ADD_TODO',
    payload,
  };
}

export function removeSingleTodoAction(id) {
  return {
    type: 'REMOVE_TODO',
    payload: id,
  };
}
