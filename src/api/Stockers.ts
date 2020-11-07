import axios from "axios";
import {User} from "../dto/User";

const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

export function getStockers(id: string, page: number = 1): Promise<User[]> {
  return new Promise((resolve, reject) => axios.get(
    `https://qiita.com/api/v2/items/${id}/stockers`,
    {
      headers: {
        "content-type": "application/json",
        'Authorization': `Bearer ${ACCESS_TOKEN}`,
        page,
      }
    }
  ).then(
    response => resolve(response.data),
    error => reject(error),
  ))
}



