import {SELECT} from "../const/SelectConst";

export const selectItem = (id: string, category: string) => ({
  type: SELECT,
  payload: {
    id,
    category,
  }
});

export type SelectAction = (
  | ReturnType<typeof selectItem>
  )