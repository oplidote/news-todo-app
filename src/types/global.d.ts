// news type
interface newsItemTypes {
  title: string;
  press: string;
  image: string;
  date: string;
  url: string;
}

// todo type
interface todoTypes {
  id: number;
  title: string;
  description: string;
  repeat: number[];
  isComplete: boolean;
  createDate: string;
}

// Action & Reducer Type
interface stateTypes {
  todos: Array[propsTodoTypes];
}
interface stateIdTypes {
  id: number;
}
enum ActionTypes {
  ADD = "ADD_TODO",
  UPDATE = "UPDATE_TODO",
  DELETE = "DELETE_TODO",
  INCREASE= 'INCREASE',
}

interface ActionADD {
  type: ActionTypes.ADD;
  todo: todoTypes;
  ADD: string;
}

interface ActionUPDATE {
  type: ActionTypes.UPDATE;
  todo: todoTypes;
  UPDATE: string;
}
interface ActionDELETE {
  type: ActionTypes.DELETE;
  id: number;
  DELETE: string;
}
interface ActionINCREASE {
  type: ActionTypes.INCREASE;
  id: number;
}
type Action = ActionADD | ActionUPDATE | ActionDELETE|ActionINCREASE;
