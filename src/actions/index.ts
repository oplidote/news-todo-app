export const ADD = "ADD_TODO";
export const DELETE = "DELETE_TODO";

let id = 1;

export const add_todo = (todo: any) => {
  return {
    type: ADD,
    todo: {
      id: id++,
      title: todo.title,
      repeat: todo.repeat,
      isComplete: todo.isComplete,
    },
  };
};

export const delete_todo = (id:number) => {
  return {
    type: DELETE,
    id,
  };
};
