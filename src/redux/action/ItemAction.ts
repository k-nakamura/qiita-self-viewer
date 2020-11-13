import {ADD_ITEMS, GET_ITEM, GET_ITEMS} from "../const/ItemConst";
import {Item, Like} from "../../types/qiita-types";
import {PER_PAGE} from "../../api/Items";


export const storeItems = (items: Item[]) => ({
  type: GET_ITEMS,
  payload: {
    items,
    hasMore: items.length === PER_PAGE,
  }
});

export const addStoredItems = (currentItems: Item[], newItems: Item[]) => ({
  type: ADD_ITEMS,
  payload: {
    items: [...currentItems, ...newItems],
    hasMore: newItems.length === PER_PAGE,
  }
});

export const storeItem = (item: Item, likes: Like[]) => ({
  type: GET_ITEM,
  payload: {
    item,
    likes,
  }
});


export type ItemAction = (
  | ReturnType<typeof storeItem>
  | ReturnType<typeof addStoredItems>
  | ReturnType<typeof storeItems>
  )