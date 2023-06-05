
const BASE_URL =
  "https://todo-redux-4a7a7-default-rtdb.firebaseio.com/todos.json";

export const fetchTodo = () => {
  return (dispatch) => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => Object.values(data))
      .then((todos) => dispatch(fetchTodosSuccess(todos)))
      .catch((error) => console.warn(error.message));
  };
};

const fetchTodosSuccess = (todos) => {
  return {
    type: "GET_TODOS",
    payload: todos,
  };
};

export const postTodo = (todo) => {
  return async (dispatch) => {
    try {
      const response = await fetch(BASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
      });
      const newTodo = await response.json();
      return dispatch(postTodoSuccess(newTodo));
    } catch (error) {
      return console.error(error.message);
    }
  };
};

export const deleteTodo = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(BASE_URL, {
        method: "DELETE",
      });
      dispatch({ type: "DELETE_TODO", payload: id });
      dispatch(fetchTodo());
    } catch (error) {
      new Error(error)
    }
  };
};

const postTodoSuccess = (todos) => {
  return {
    type: "POST_TODO",
    payload: todos,
  };
};

