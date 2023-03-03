import { useNavigate } from "react-router-dom";

export const Delete = () => {
    const navigate = useNavigate;

    useEffect(() => {
        localStorage.clear();
        navigate('/');
        window.location.reload();
    }, [])
    
    return null
}