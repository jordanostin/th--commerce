import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addUser } from "../../store/slices/user/userSlice";

export const Option = () => {

    const  dispatch = useDispatch();
    const navigate = useNavigate();
    const {userId} = useParams();

    console.log(userId)

    const handleSubmit = (e) => {
        e.preventDefault();
      
        const newPassword = new FormData(e.target);
      
      
        fetch(`http://localhost:9001/users/${userId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            password: newPassword.get('password')
          })
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          dispatch(addUser(data));
          
        })
        .catch(err => console.log(err));

        navigate('/');
    };

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor='password'>New password</label>
            <input type='password' id='password' name='password'/>
            <input type='submit' value='Apply'/>
        </form>
    );
}