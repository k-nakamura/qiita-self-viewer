import axios from "axios";
import {Item} from '../types/qiita-types';
import {addGetParameters} from "../util/url";

const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;
export const PER_PAGE = 1;

export function getItems(page: number = 1): Promise<Item[]> {
  return new Promise<Item[]>((resolve, reject) =>
    axios.get(
      addGetParameters(
        'https://qiita.com/api/v2/authenticated_user/items',
        {page, per_page: PER_PAGE}
      ),
      {
        headers: {
          "content-type": "application/json",
          'Authorization': `Bearer ${ACCESS_TOKEN}`,
        }
      }
    ).then(
      response => resolve(response.data),
      error => reject(error)
    )
  )
}

export function getItem(item_id: string): Promise<Item> {
  return new Promise<Item>((resolve, reject) =>
    axios.get(
      `https://qiita.com/api/v2/items/${item_id}`,
      {
        headers: {
          'content-type': "application/json",
          'Authorization': `Bearer ${ACCESS_TOKEN}`,
        }
      }
    ).then(
      response => resolve(response.data),
      error => reject(error)
    ));
}

