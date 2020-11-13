import {SELECT} from "../const/SelectConst";
import {SelectAction} from "../action/SelectAction";

const initialState = {
  id: '',
  category: '0', // 0: LGTM, 1: Stock
};

function selectReducer(state = initialState, action: SelectAction) {
  switch (action.type) {
    case SELECT:
      return {
        ...state,
        id: action.payload.id,
        category: action.payload.category,
      }
    default:
      return {
        ...state,
      };
  }
}

export default selectReducer;