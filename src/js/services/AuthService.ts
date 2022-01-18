import axios from "axios"
import { IUser } from "js/interfaces/user.interface"
import { IUserLogin } from "js/interfaces/userLogin.interface"
import { IUserQues } from "js/interfaces/userQues.interface"
import { IUserResult } from "js/interfaces/userResult"

const BASE_URL = 'https://e964afc2-4211-4c82-a18d-fc7b6809d9b1.mock.pstmn.io/'

export const AuthService = {
  login,
  checkQuesFill,
  updateUserQues,
  getActivityToShow
}

async function login(user: IUserLogin): Promise<{currUser:IUser,currQues:IUserQues}> {
  try {
    const currUser = await (await axios.post(`${BASE_URL}UserAuth`, user)).data
    const currQues = await (await axios.post(`${BASE_URL}GetUserQuestionnaire`, currUser.id)).data
    const data = { currUser, currQues }

    return data
  } catch (err) {
    throw err
  }
}
async function updateUserQues(ques: IUserQues): Promise<IUserResult> {
  let userResult:any
  try {
    const {data} = await axios.post(`${BASE_URL}UpdateUserQuestionnaire`, ques)
    if(data['Status']) {
       userResult = await getUserResult(ques['UserId'])
    }
    return userResult
  } catch (err) {
    throw err
  }
}

async function getUserResult(userId:string):Promise<IUserResult>{
  const {data} = await axios.post(`${BASE_URL}GetUserResult`, userId)
  return data

}
async function getActivityToShow(activityToShow:any):Promise<any>{
  const {data} = await axios.post(`${BASE_URL}AddUserActivity`, activityToShow)
  return data

}

function checkQuesFill(userQues: object) {
  const ques = []
  for (const [key, value] of Object.entries(userQues)) {
    if (!value) ques.push(key)
  }
  return ques
}