import axios from 'axios';
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom";
import { addUser } from "../store/slices/user/userSlice";



export const Login = () =>{

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = new FormData(e.target); 

        axios.post('http://localhost:9001/login', {
            email: user.get('email'), 
            password: user.get('password') 
        })
        .then((res) => {

            console.log(res.data)

            const email = res.data.user.email
            const isAdmin = res.data.user.isAdmin
            const jwt = res.data.user.token

            localStorage.setItem('jwt', jwt);

            dispatch(addUser({email, isAdmin, jwt}));

            navigate('/user');
            
        })
        .catch((error) => {
            console.error(error); 
        });
    };

    return(
        <>
            <h1>Login</h1>

            <form onSubmit={handleSubmit}>

                <label htmlFor='email'>Email</label>
                <input type='text' id='email' name='email' />

                <label htmlFor='password'>Password</label>
                <input type='password' id='password' name='password' />

                <input type='submit' value='ok' />
            </form>

        </>
    );
}