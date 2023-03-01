import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        email:'',
        jwt:'',
        isLogged: false
    },
    reducers: {
        addUser: (state, action) => {
            return{
                ...state,
                email: action.payload.email,
                jwt: action.payload.jwt,
                isLogged: true
            }
        }
    },
})

export const {addUser} = userSlice.actions

export default userSlice.reducer