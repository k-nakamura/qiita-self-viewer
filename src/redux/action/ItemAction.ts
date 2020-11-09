import {SELECT} from "../const/ItemConst";

export const selectItem = (id: string, category: string) => ({
  type: SELECT,
  payload: {
    id,
    category,
  }
});

export type ItemAction = (
  | ReturnType<typeof selectItem>
  )