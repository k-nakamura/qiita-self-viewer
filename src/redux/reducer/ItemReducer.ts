import {Item, Like} from "../../types/qiita-types";
import {ADD_ITEMS, GET_ITEM, INCREMENT_PAGE} from "../const/ItemConst";
import {ItemAction} from "../action/ItemAction";

const initialState: {
  items: Item[],
  page: number,
  hasMore: boolean,
  selected: {
    item: null | Item,
    likes: Like[],
  }
} = {
  items: [],
  page: 1,
  hasMore: false,
  selected: {
    item: null,
    likes: [],
  }
};

function ItemReducer(state = initialState, action: ItemAction) {
  switch (action.type) {
    case ADD_ITEMS:
      return {
        ...state,
        items: [...state.items, ...action.payload.items],
      }
    case GET_ITEM:
      return {
        ...state,
        selected: {
          item: action.payload.item,
          likes: action.payload.likes,
        },
      };
    case INCREMENT_PAGE:
      return {
        ...state,
        page: state.page + 1,
      }
    default:
      return {
        ...state,
      };
  }
}

export default ItemReducer;
