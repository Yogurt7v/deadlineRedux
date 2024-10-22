const initialState = [];

export function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case 'ADD':
      return [
        ...state,
        {
          id: Date.now(),
          title: payload,
          todos: [],
        },
      ];

    case 'REMOVE':
      return state.filter((item) => item.id !== payload);

    case 'ADD_TODO':
      return state.map((item) => {
        if (item.id === payload.id) {
          return {
            ...item,
            todos: [
              ...item.todos,
              { title: payload.text, completed: false, id: Date.now() },
            ],
          };
        }
        return item;
      });

    case 'REMOVE_TODO':
      return state.map((item) => {
        return {
          ...item,
          todos: item.todos.filter((todo) => todo.id !== payload),
        };
      });

    default:
      return state;
  }
}

export default rootReducer;
