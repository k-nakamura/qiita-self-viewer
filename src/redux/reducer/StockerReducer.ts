import {User} from "../../types/qiita-types";
import {ADD_STOCKERS, GET_STOCKERS} from "../const/StockerConst";
import {StockerAction} from "../action/StockerAction";

const initialState = {
  page: 0,
  hasMore: false,
  stockers: Array<User>(),
};

function StockerReducer(state = initialState, action: StockerAction) {
  switch (action.type) {
    case GET_STOCKERS:
      return {
        ...state,
        ...action.payload,
        page: 1,
      }
    case ADD_STOCKERS:
      return {
        ...state,
        ...action.payload,
        page: state.page + 1,
      }
    default:
      return {
        ...state,
      };
  }
}

export default StockerReducer;
