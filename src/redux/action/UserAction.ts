import {User} from "../../types/qiita-types";
import {GET_USER} from "../const/UserConst";


export const storeUser = (user: User) => ({
  type: GET_USER,
  payload: {
    user,
  }
});

export type UserAction = (
  | ReturnType<typeof storeUser>
  )