import {ADD_STOCKERS, GET_STOCKERS} from "../const/StockerConst";
import {User} from "../../types/qiita-types";
import {PER_PAGE} from "../../api/Stockers";


export const storeStockers = (stockers: User[]) => ({
  type: GET_STOCKERS,
  payload: {
    stockers,
    hasMore: stockers.length === PER_PAGE,
  }
});

export const addStoredStockers = (currentStockers: User[], newStockers: User[]) => ({
  type: ADD_STOCKERS,
  payload: {
    stockers: [...currentStockers, ...newStockers],
    hasMore: newStockers.length === PER_PAGE,
  }
});


export type StockerAction = (
  | ReturnType<typeof storeStockers>
  | ReturnType<typeof addStoredStockers>
  )