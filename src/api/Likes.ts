import axios from "axios";
import {Like} from "../dto/Like";

const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

export function getLikes(id: string, page: number): Promise<Like[]> {
  return new Promise((resolve, reject) => axios.get(
    `https://qiita.com/api/v2/items/${id}/likes`,
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


