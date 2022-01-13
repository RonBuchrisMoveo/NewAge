import { createSlice, configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import { IInitialState } from "js/interfaces/initialState.interface";
import { IUser } from "js/interfaces/user.interface";
import { IUserLogin } from "js/interfaces/userLogin.interface";
import { AuthService } from "js/services/AuthService";

export const initialState:IInitialState = {
    user: null
}

export const setLogin = createAsyncThunk('data/setLogin',async (user:IUserLogin)=>{
    const data:IUser = await AuthService.login(user)
    return data
})

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(setLogin.fulfilled, (state, action)=>{
            state.user = action.payload
        })
    }
})

const store = configureStore({
    reducer: {
        data: dataSlice.reducer
    }
})

type RootState = ReturnType<typeof store.getState>

export const selectCar = (state: RootState) => state.data

export default store