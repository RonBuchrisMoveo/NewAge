import { IUser } from "js/interfaces/user.interface";

import { IUserQues } from "js/interfaces/userQues.interface";

export interface IInitialState {
    user:IUser|null
    userQues:IUserQues|null
    quesFill:object|null
    userResult:object|null
    userActivity:object|null
  }

