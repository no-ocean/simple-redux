import { combineReducers, createStore } from "redux";
import { usernameReducer } from "./UserName/state/reducer";
import { taskReducer } from "./TaskList/state/reducer";

const rootReducer = combineReducers({
  name: usernameReducer,
  tasks: taskReducer
});

const initialState = {
  name: "Patrick",
  tasks: []
};

export const store = createStore(rootReducer, initialState);
