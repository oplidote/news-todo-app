import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { idReducer } from "./reducers/idReducer";
import { todoReducer } from "./reducers/todoReducer";

const persistConfig = {
  key: "root",
  storage,
};
export const rootReducer = combineReducers({
  todos: todoReducer,
  id: idReducer,
});

export default persistReducer(persistConfig, rootReducer);
