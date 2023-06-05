const initialState = {
  todos: [],
};

export const fireBasetodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TODOS":
      return {
        ...state,
        todos: action.payload,
      };
    case "POST_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((el) => el.id !== action.payload),
      };
    case "CHECK":
      return {
        ...state,
        todos: state.todos.map((el) => {
          if (el.id === action.payload) {
            return {
              ...el,
              completed: !el.completed,
            };
          }
          return el
        }),
      };
    default:
      return state;
  }
};
