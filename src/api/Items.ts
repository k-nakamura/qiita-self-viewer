import axios from "axios";
import {Item} from "../dto/Item";

const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

export function getItems(): Promise<Item[]> {
  return axios.get(
    'https://qiita.com/api/v2/authenticated_user/items',
    {
      headers: {
        "content-type": "application/json",
        'Authorization': `Bearer ${ACCESS_TOKEN}`,
      }
    }
  ).then(require => require.data);
}

export function getItem(item_id: string): Promise<Item> {
  return axios.get(
    `https://qiita.com/api/v2/items/${item_id}`,
    {
      headers: {
        "content-type": "application/json",
        'Authorization': `Bearer ${ACCESS_TOKEN}`,
      }
    }
  ).then(require => require.data);
}

