import { createSlice, configureStore, createAsyncThunk } from "@reduxjs/toolkit";

import { IActivityToShow } from "js/interfaces/activityToShow.interface";
import { IInitialState } from "js/interfaces/initialState.interface";
import { IUser } from "js/interfaces/user.interface";
import { IUserActivity } from "js/interfaces/userActivity.interface";
import { IUserLogin } from "js/interfaces/userLogin.interface";
import { ISortResult } from "js/interfaces/userOption.interface";
import { IUserQues } from "js/interfaces/userQues.interface";
import { IUserResult } from "js/interfaces/userResult";
import { AuthService } from "js/services/AuthService";

export const initialState:IInitialState = {
    user: null,
    userQues:null,
    quesFill:null,
    userResult:null,
    userActivity:null
}

export const setLogin = createAsyncThunk('data/setLogin',async (user:IUserLogin)=>{
    const data:{currUser:IUser,currQues:IUserQues} = await AuthService.login(user)
    // const {currUser}=data
    // if(!(currUser.name).length) return null
    return data
})
export const setLogout = createAsyncThunk('data/setLogout',async ()=>{
    return null
})
export const setUserQues = createAsyncThunk('data/setUserQues',async (ques:IUserQues)=>{
    const data:ISortResult = await AuthService.updateUserQues(ques)
    return data
})
export const setActivityToShow = createAsyncThunk('data/setActivityToShow',async (ActivityToShow:IActivityToShow)=>{
    const data:IUserActivity = await AuthService.getActivityToShow(ActivityToShow)
    return data
})
export const setAddUserActivity = createAsyncThunk('data/setAddUserActivity',async (addActivity:any)=>{
    const data:IUserActivity = await AuthService.addUserActivity(addActivity)
    return data
})

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setQuesFill:(state,action)=>{
            state.quesFill = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(setLogin.fulfilled, (state, action)=>{
            // if(action.payload===null) return
            const {currUser,currQues} = action.payload
            state.user = currUser
            state.userQues = currQues
        })
        .addCase(setLogout.fulfilled, (state, action)=>{
            state.user = action.payload
            state.userQues = action.payload
            state.quesFill = action.payload
            state.userResult = action.payload
        })
        .addCase(setUserQues.fulfilled, (state, action)=>{
            state.userResult=action.payload 
        })
        .addCase(setActivityToShow.fulfilled, (state, action)=>{
            state.userActivity=action.payload 
            
        })
        // .addCase(setAddUserActivity.fulfilled, (state, action)=>{
        // })
    }
})

const store = configureStore({
    reducer: {
        data: dataSlice.reducer,
    }
})

type RootState = ReturnType<typeof store.getState>

// export const selectCar = (state: RootState) => state.data
export const {setQuesFill} = dataSlice.actions

export default store