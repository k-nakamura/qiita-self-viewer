import {User} from "./User";

export type Like = Required<{
  created_at: string,
  user: User,
}>