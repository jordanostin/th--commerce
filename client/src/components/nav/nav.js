import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Register } from "../../pages/Register";
import { Login } from '../../pages/Login'

export const Nav = () => {

    return(
        <>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
        </>
    );
}