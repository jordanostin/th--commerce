import { useSelector} from 'react-redux';

export const User = () => {

    const user = useSelector(state => state);
    const email = user.user.email;

    
    

    return(
        <>  
            <p>Bonjour {email}</p>
        </>
    )
}