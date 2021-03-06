import axios from "axios"
import { IActivityToShow } from "js/interfaces/activityToShow.interface"
import { IUser } from "js/interfaces/user.interface"
import { IUserActivity } from "js/interfaces/userActivity.interface"
import { IUserLogin } from "js/interfaces/userLogin.interface"
import { ISortResult, IUserOption } from "js/interfaces/userOption.interface"
import { IUserQues } from "js/interfaces/userQues.interface"
import { IUserResult } from "js/interfaces/userResult"

const BASE_URL = 'https://e964afc2-4211-4c82-a18d-fc7b6809d9b1.mock.pstmn.io/'
const NEW_BASE_URL = 'https://newmefuction.azurewebsites.net/api/'

export const AuthService = {
  login,
  checkQuesFill,
  updateUserQues,
  getActivityToShow,
  addUserActivity,
  getUserResult
}

async function login(user: IUserLogin|null): Promise<{currUser:IUser,currQues:IUserQues}|null> {
  const userFromLocalStorage= localStorage.getItem('user')
  let currUser:any
  try {
    if(!userFromLocalStorage){
      currUser = await (await axios.post(`${NEW_BASE_URL}UserAuth`, user)).data
      if(!JSON.parse(currUser.id)) return null
      _saveUser(currUser)
    }else{
      currUser=JSON.parse(userFromLocalStorage)
    }
      const userId={User:currUser.id}
    const currQues = await (await axios.post(`${NEW_BASE_URL}GetUserQuestionnaire`, userId)).data
    for(const key in currQues){
      if(key ==='UserId') continue 
      if(currQues[key]===''){
        currQues[key]=[]
      }else{
        const answer = JSON.parse(currQues[key])
        if(typeof answer === 'number'){
          currQues[key]=[answer]
        }else{
          currQues[key]=answer
        }
      }
    }
    const data = { currUser, currQues }
    return data
  } catch (err) {
    throw err
  }
}

function _saveUser(user:any){
  localStorage.setItem('user', JSON.stringify(user))
}

async function updateUserQues(ques: IUserQues): Promise<any> {
  let userResult:any
  try {
    const {data} = await axios.post(`${NEW_BASE_URL}UpdateUserQuestionnaire`, ques)
    if(data['Status']) {
       userResult = await getUserResult(ques['UserId'])
    }
    return userResult
  } catch (err) {
    throw err
  }
}


async function getUserResult(userId:string|null):Promise<ISortResult>{
  let user:object
  const userFromLocalStorage:any= localStorage.getItem('user')
  const currUser = JSON.parse(userFromLocalStorage)
  if(userFromLocalStorage){
    user={
      UserID:(currUser.id).toString()
    }
  } else{
     user={
      UserID:userId
    }
  }
  const {data} = await axios.post(`${NEW_BASE_URL}GetUserResult`, user)
  const sortResult = await sortUserResult(data)
  return sortResult
}

async function addUserActivity(addActivity:any):Promise<any>{
  try{
    const {data} = await axios.post(`${NEW_BASE_URL}AddUserActivity`, addActivity)
    return data
  }catch(err){
   return err
  }
}


async function sortUserResult({Table}:any):Promise<ISortResult>{
  const Matchs: IUserOption[]=[]
  const Intrest: IUserOption[]=[]
  const Maby: IUserOption[]=[]
  const sortedResult:ISortResult={
      name:Table[0].Name,
      results:[{
        Matchs:Matchs,
        Intrest:Intrest,
        Maby:Maby
      }]
    }
  Table.forEach((result:IUserOption)=>{
    if(result.Grade>7) Matchs.push(result)
    else if(result.Grade>4) Intrest.push(result)
    else Maby.push(result)
  })
  return sortedResult
}


async function getActivityToShow(activityToShow:IActivityToShow|null):Promise<IUserActivity|null>{
  if(!activityToShow) return null
  const {data} = await axios.post(`${NEW_BASE_URL}GetActivity`, activityToShow)
  const {Table} =data
  return Table

}

function checkQuesFill(userQues: object) {
  const ques = []
  for (const [key, value] of Object.entries(userQues)) {
    if (!value.length) ques.push(key)
  }
  return ques
}