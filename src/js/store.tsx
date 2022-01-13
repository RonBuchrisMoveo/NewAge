import { createSlice, configureStore, createAsyncThunk } from "@reduxjs/toolkit";

export const initialState = {

}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {},
    // extraReducers: (builder) => {
    //     builder
    // }
})

const store = configureStore({
    reducer: {
        data: dataSlice.reducer
    }
})

type RootState = ReturnType<typeof store.getState>

export const selectCar = (state: RootState) => state.data

export default store