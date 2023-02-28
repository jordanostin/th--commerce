import axios from 'axios';
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom";
import { addUser } from "../store/slices/user/userSlice";

export const Register = () =>{

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {

        e.preventDefault();

        const newUser = new FormData(e.target); 

        axios.post('http://localhost:9001/register', {
            email: newUser.get('email'), 
            password: newUser.get('password') 
        })
        .then((res) => {
            console.log(res.data);

            const email = res.data.newUser.email
            const password = res.data.newUser.password
            const isAdmin = res.data.newUser.isAdmin
            const jwt = res.data.jwt
            
            localStorage.setItem('jwt', res.data.token);

            dispatch(addUser({email,password,isAdmin,jwt}))
        })
        .catch((error) => {
            console.error(error); 
        });

        navigate('/')
        
    }

    return(
        <>
            <h1>Register</h1>

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