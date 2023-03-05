import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Nav } from '../../components/nav/nav';
import { Register } from "../register/Register";
import { Logout } from "../Logout";
import { Login } from "../login/Login";
import { AddProduct } from "../products/AddProduct";
import { Admin } from "../admin/Admin";
import { Update } from "../products/updateProduct.js";
import { DeleteProduct } from "../products/deleteProduct.js";
import { DeleteUsers } from "../DeleteUsers";

export const Home = () => {

    return(
        <>   
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Nav />}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/logout' element={<Logout/>}/>
                    <Route path='/add-product' element={<AddProduct/>}/>
                    <Route path='/admin' element={<Admin/>}/>
                    <Route path='/update/:productId' element={<Update/>} />
                    <Route path='/delete/product/:productId' element={<DeleteProduct/>} />                   
                    <Route path='/delete/user/:userId' element={<DeleteUsers/>} />                   

                </Routes>
            </BrowserRouter>

            
        </>
    );
}