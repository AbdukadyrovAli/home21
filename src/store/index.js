import { applyMiddleware, combineReducers, createStore } from "redux";
import { todoReducer } from "./reducers/todo-reducer";
import { fireBasetodoReducer } from "./reducers/fb-todo";
import thunk from "redux-thunk";

 const rootReducer = combineReducers({
  todoReducer: todoReducer,
  firebaseTodo: fireBasetodoReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
