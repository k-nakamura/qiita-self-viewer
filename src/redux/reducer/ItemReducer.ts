import {SELECT} from "../const/ItemConst";
import {ItemAction} from "../action/ItemAction";

const initialState = {
  selectedID: '',
  selectedCategory: '0', // 0: LGTM, 1: Stock
};

function ItemReducer(state = initialState, action: ItemAction) {
  switch (action.type) {
    case SELECT:
      return {
        ...state,
        selectedID: action.payload.id,
        selectedCategory: action.payload.category,
      }
    default:
      return {
        ...state,
      };
  }
}

export default ItemReducer;