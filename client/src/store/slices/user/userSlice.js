import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        email:'',
    },
    reducers: {
        addUser: (state, action) => {
            return{
                ...state,
                email: action.payload.email,
                jwt: action.payload.jwt
            }
        }
    },
})

export const {addUser} = userSlice.actions

export default userSlice.reducer