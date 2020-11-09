import {combineReducers} from "redux";
import ItemReducer from "./redux/reducer/ItemReducer";

export const RootReducer = combineReducers({
  item: ItemReducer,
});

export type RootState = ReturnType<typeof RootReducer>;