import {Item, Like, User} from "../../types/qiita-types";
import {ADD_ITEMS, GET_ITEM, GET_ITEMS} from "../const/ItemConst";
import {ItemAction} from "../action/ItemAction";

const initialState: {
  items: Item[],
  page: number,
  hasMore: boolean,
  selected: {
    item: null | Item,
    likes: Like[],
    stocker: {
      page: number,
      hasMore: boolean,
      stockers: User[],
    },
  }
} = {
  items: [],
  page: 0,
  hasMore: false,
  selected: {
    item: null,
    likes: [],
    stocker: {
      page: 0,
      hasMore: false,
      stockers: [],
    },
  }
};

function ItemReducer(state = initialState, action: ItemAction) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        ...action.payload,
        page: 1,
      }
    case ADD_ITEMS:
      return {
        ...state,
        ...action.payload,
        page: state.page + 1,
      }
    case GET_ITEM:
      return {
        ...state,
        selected: {
          ...state.selected,
          ...action.payload,
        },
      };
    default:
      return {
        ...state,
      };
  }
}

export default ItemReducer;
