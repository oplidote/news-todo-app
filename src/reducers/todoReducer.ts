import { ADD, UPDATE, DELETE } from "../actions";

const initialState: stateTypes = {
  todos: [],
};

export const todoReducer = (
  state: stateTypes = initialState,
  action: Action
) => {
  if (action.type === ADD) {
    return {
      todos: [...state.todos, action.todo],
    };
  } else if (action.type === UPDATE) {
    return {
      todos: [
        ...state.todos.map((todo: todoTypes) =>
          todo.id !== action.todo.id ? todo : action.todo
        ),
      ],
    };
  } else if (action.type === DELETE) {
    return {
      todos: [...state.todos.filter((todo: todoTypes) => todo.id !== action.id)],
    };
  } else {
    return state;
  }
};
