import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from '../../axios'

export const fetchAuth = createAsyncThunk('auth/fetchAuth', async(params) => {
    const {data} = await axios.post('/auth/login', params)
    return data
})

export const fetchRegister = createAsyncThunk('auth/fetchRegister', async(params) => {
    const {data} = await axios.post('/auth/register', params)
    return data
})

const initialState ={
    data: null,
    status: 'loading'
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers : {

    },
    extraReducers: builder => {
        builder.addCase(fetchAuth.pending,  (state) => {
            state.status = 'loading'
            state.data = null
        })
        builder.addCase(fetchAuth.fulfilled,  (state, action) => {
                state.status = 'loaded'
                state.data = action.payload
        })
        builder.addCase(fetchAuth.rejected,  (state) => {
                state.status = 'error'
                state.data = null
        })
        builder.addCase(fetchRegister.pending,  (state) => {
            state.status = 'loading'
            state.data = null
        })
        builder.addCase(fetchRegister.fulfilled,  (state, action) => {
            state.status = 'loaded'
            state.data = action.payload
        })
        builder.addCase(fetchRegister.rejected,  (state, action) => {
            state.status = 'error'
            state.data = action.payload
        })
    }
})


export const authReducer = authSlice.reducer
