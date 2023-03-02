import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Nav } from '../../components/nav/nav';
import { Register } from "../register/Register";
import { Logout } from "../Logout";
import { Login } from "../login/Login";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Header } from "../../components/header/header";
import { AddProduct } from "../products/AddProduct";

export const Home = () => {

    const user = useSelector(state => state.user);

    useEffect(() => {
        console.log(user);
    }, [user])

    return(
        <>   
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Nav />}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/logout' element={<Logout/>}/>
                    <Route path='/add-product' element={<AddProduct/>}/>
                </Routes>
            </BrowserRouter>

            
        </>
    );

    
}