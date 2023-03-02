import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom";
import { addUser } from "../../store/slices/user/userSlice";



export const Login = () =>{

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = new FormData(e.target); 

        fetch('http://localhost:9001/login', {
            method: 'POST',
            body: JSON.stringify({
                email: user.get('email'),
                password: user.get('password')
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((res) => res.json())
        .then((data) => {

            console.log(data)
            const email = data.user.email
            const password = data.user.password
            const isAdmin = data.user.isAdmin
            const jwt = data.jwt

            localStorage.setItem('token', data.token);

            dispatch(addUser({email,password,isAdmin,jwt}))

        })
        .catch((err) => console.log(err));

        navigate('/');
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