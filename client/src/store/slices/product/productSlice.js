import {createSlice} from '@reduxjs/toolkit'

export const productSlice = createSlice({
    name: 'productSlice',
    initialState: {
        name:'',
        description:'',
        img:'',
        price:'',
        quantity:''
    },
    reducers: {
        addProduct: (state, action) => {
            return{
                ...state,
                name: action.payload.name,
                description: action.payload.description,
                img: action.payload.img,
                price: action.payload.price,
                quantity: action.payload.quantity
            }
        }
    },
})

export const {addProduct} = productSlice.actions

export default productSlice.reducer