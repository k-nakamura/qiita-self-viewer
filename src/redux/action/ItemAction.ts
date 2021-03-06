import {ADD_ITEMS, GET_ITEM, INCREMENT_PAGE} from "../const/ItemConst";
import {Item, Like} from "../../types/qiita-types";


export const addStoredItems = (newItems: Item[]) => ({
  type: ADD_ITEMS,
  payload: {
    items: [...newItems],
  }
});

export const storeItem = (item: Item, likes: Like[]) => ({
  type: GET_ITEM,
  payload: {
    item,
    likes,
  }
});

export const incrementPage = () => ({
  type: INCREMENT_PAGE,
  payload: {}
})

export type ItemAction = (
  | ReturnType<typeof addStoredItems>
  | ReturnType<typeof storeItem>
  | ReturnType<typeof incrementPage>
  )