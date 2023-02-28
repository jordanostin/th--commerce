import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import getVerifyToken from '../components/action/verifyToken'
import { addUser } from '../store/slices/user/userSlice';

export const User = () => {

    const dispatch = useDispatch()    
    const state = useSelector(state => state);
    const email = state.user.email;
    
    const jwt = localStorage.getItem('jwt');
    const decoded = getVerifyToken(jwt, 'my-secret-key');

    if (decoded) {
        console.log('JWT valide :', decoded);
    } else {
        console.log('JWT invalide');
    }


    return(
        <>  
            <p>Bonjour {email}</p>
        </>
    )
}