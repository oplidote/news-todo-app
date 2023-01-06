export const ADD = "ADD_TODO";
export const UPDATE = "UPDATE_TODO";
export const DELETE = "DELETE_TODO";
let id = 1;

export const add_todo = (todo: any) => {
  return {
    type: ADD,
    todo: {
      id: id++,
      title: todo.title,
      repeat: todo.repeat,
      description: todo.description,
      isComplete: todo.isComplete,
      createDate: todo.createDate,
    },
  };
};
export const update_todo = (todo: any) => {
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
