import { INCREASE } from "../actions";

const initialState = {
  id: 1,
};
export const idReducer = (state: any = initialState, action: any) => {
  if (action.type == INCREASE) {
    return { id: action.id };
  } else {
    return state;
  }
};
