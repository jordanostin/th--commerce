import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        email:'',
        token:'',
        isAdmin: false
    },
    reducers: {
        addUser: (state, action) => {
            return{
                ...state,
                email: action.payload.email,
                token: action.payload.token,
                isAdmin: action.payload.isAdmin
            }
        }
    },
})

export const {addUser} = userSlice.actions

export default userSlice.reducer