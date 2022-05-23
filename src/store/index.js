import { combineReducers, createStore } from "redux";
import reducer from "./reducer";

const reducers = combineReducers({
  first: reducer,
});

const store = createStore(reducers);

export default store;
