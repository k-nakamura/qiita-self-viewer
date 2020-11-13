import {combineReducers} from "redux";
import SelectReducer from "./SelectReducer";
import ItemReducer from "./ItemReducer";
import StockerReducer from "./StockerReducer";

export const RootReducer = combineReducers({
  select: SelectReducer,
  item: ItemReducer,
  stocker: StockerReducer,
})

export type RootState = ReturnType<typeof RootReducer>;