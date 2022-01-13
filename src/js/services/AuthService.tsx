import axios from "axios"
import { IUser } from "js/interfaces/user.interface"
import { IUserLogin } from "js/interfaces/userLogin.interface"

const BASE_URL= 'https://e964afc2-4211-4c82-a18d-fc7b6809d9b1.mock.pstmn.io/'

export const AuthService={
    login
}

async function login (user: IUserLogin):Promise<IUser> {
    try {
      const {data} = await axios.post(`${BASE_URL}UserAuth`, user)
      return data
    }catch (err) {
      throw err
    }
  }