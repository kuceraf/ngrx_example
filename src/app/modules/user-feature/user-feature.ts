import {User} from "./user";

export interface UserFeature {
  users: User[],
  loading: boolean,
  error: any
}
