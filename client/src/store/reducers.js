import {combineReducers} from "redux";
import userSlice from "./slices/user/userSlice";
import productSlice from "./slices/product/productSlice";

//import reducer from 'chemin/reducer'

const rootReducer = combineReducers({
    user: userSlice,
    product: productSlice
})


export default rootReducer