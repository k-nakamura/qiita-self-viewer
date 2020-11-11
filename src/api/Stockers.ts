import axios from "axios";
import {User} from "../types/User";
import {addGetParameters} from "../util/url";

export const PER_PAGE = 20;

const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

export function getStockers(id: string, page: number = 1): Promise<User[]> {
  return new Promise((resolve, reject) => axios.get(
    addGetParameters(
      `https://qiita.com/api/v2/items/${id}/stockers`,
      {page, per_page: PER_PAGE,}
    ),
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



