import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Nav = () => {

    const user = useSelector(state => state.user)

    useEffect(() => {
        console.log(user);
    },[user])

    return(
        <nav>
            {!user.isLogged ? (
                <>
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                </>
            ):(
                <>
                    <Link to='/logout'>Logout</Link>
                    <Link to={`/option/${user._id}`}>Option</Link>
                    {user.isAdmin && (
                        <>
                            <Link to='/add-product'>Add product</Link>
                            <Link to='/admin'>Admin</Link>
                        </>
                    )}
                </>
            )}
        </nav>
        
    );
}