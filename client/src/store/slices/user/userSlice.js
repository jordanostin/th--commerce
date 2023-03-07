import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        email:'',
        token:'',
        isAdmin: false,
    },
    reducers: {
        addUser: (state, action) => {
            return{
                ...state,
                id: action.payload._id,
                email: action.payload.email,
                token: action.payload.token,
                isAdmin: action.payload.isAdmin,
                isLogged: true
            }
        }
    },
})

export const {addUser} = userSlice.actions

export default userSlice.reducer