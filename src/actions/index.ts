export const ADD = "ADD_TODO";
export const UPDATE = "UPDATE_TODO";
export const DELETE = "DELETE_TODO";
export const INCREASE = "INCREASE";

export const add_todo = (todo: todoTypes) => {
  return {
    type: ADD,
    todo: {
      id: todo.id,
      title: todo.title,
      repeat: todo.repeat,
      description: todo.description,
      isComplete: todo.isComplete,
      createDate: todo.createDate,
    },
  };
};
export const update_todo = (todo: todoTypes) => {
  return {
    type: UPDATE,
    todo: {
      id: todo.id,
      title: todo.title,
      repeat: todo.repeat,
      description: todo.description,
      isComplete: todo.isComplete,
      createDate: todo.createDate,
    },
  };
};
export const delete_todo = (id: number) => {
  return {
    type: DELETE,
    id,
  };
};
export const increase = (id: number) => {
  return {
    type: INCREASE,
    id: ++id,
  };
};
