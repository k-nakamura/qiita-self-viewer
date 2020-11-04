import axios from "axios";
import Item from "../dto/Item";

const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

export function getItems(): Promise<Item[]> {
  return new Promise((resolve, reject) => axios.get(
    'https://qiita.com/api/v2/authenticated_user/items',
    {
      headers: {
        "content-type": "application/json",
        'Authorization': `Bearer ${ACCESS_TOKEN}`,
      }
    }
  ).then(
    response => resolve(response.data),
    error => reject(error),
  ))
}

