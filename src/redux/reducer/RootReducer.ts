import {combineReducers} from "redux";
import SelectReducer from "./SelectReducer";
import ItemReducer from "./ItemReducer";
import StockerReducer from "./StockerReducer";
import UserReducer from "./UserReducer";

export const RootReducer = combineReducers({
  select: SelectReducer,
  user: UserReducer,
  item: ItemReducer,
  stocker: StockerReducer,
})

export type RootState = ReturnType<typeof RootReducer>;