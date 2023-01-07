import { ADD, UPDATE, DELETE } from "../actions";

const initialState = {
  todos: [],
};

export const todoReducer = (state:stateTypes = initialState, action: any) => {
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
      todos: [...state.todos.filter((todo: any) => todo.id !== action.id)],
    };
  } else {
    return state;
  }
};
