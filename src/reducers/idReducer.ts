import { INCREASE } from "../actions";


const initialState:stateIdTypes = {
  id: 1,
};
export const idReducer = (state: stateIdTypes = initialState, action: Action) => {
  if (action.type == INCREASE) {
    return { id: action.id };
  } else {
    return state;
  }
};
