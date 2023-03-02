import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Nav = () => {

    const user = useSelector(state => state.user)

    return(
        <nav>
            {!user.isLogged ? (
                <>
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                </>
            ):(
                <>
                    <Link to='/add-product'>Add product</Link>
                    <Link to='/logout'>Logout</Link>
                </>
            )}
        </nav>
        
    );
}