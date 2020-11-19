import axios from "axios";
import {User} from '../types/qiita-types';

const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

export function getUser(): Promise<User> {
  return new Promise<User>((resolve, reject) =>
    axios.get(
      'https://qiita.com/api/v2/authenticated_user',
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
