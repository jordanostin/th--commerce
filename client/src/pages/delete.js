import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const Delete = () => {

    const {productId} = useParams;
    const navigate = useNavigate;

    useEffect(() => {
        
        fetch(`http://localhost:9001/delete/product/${productId}`, {
            methode: 'DELETE'
        })
            .then(data => console.log(data))
            .catch(err => console.log(err))

        navigate('/admin');

    }, [])
    
    return null
}