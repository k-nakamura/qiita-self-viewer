import {User} from "../../types/qiita-types";
import {GET_USER} from "../const/UserConst";
import {UserAction} from "../action/UserAction";

const initialState: {
  user: User | null
} = {
  user: null
};

function UserReducer(state = initialState, action: UserAction) {
  switch (action.type) {
    case GET_USER:
      return {
        state,
        ...action.payload,
      }
    default:
      return {
        ...state,
      };
  }
}

export default UserReducer;
