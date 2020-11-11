import {combineReducers} from "redux";
import ItemReducer from "./ItemReducer";

export const RootReducer = combineReducers({
  item: ItemReducer,
});

export type RootState = ReturnType<typeof RootReducer>;