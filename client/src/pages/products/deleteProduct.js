import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const DeleteProduct = () => {

    const {productId} = useParams();
    const navigate = useNavigate();

    useEffect(() => {

        fetch(`http://localhost:9001/admin/delete/product/${productId}`)
            .then(data => console.log(data))
            .catch(err => console.log(err))

        navigate('/admin');

    }, [])
    
    return null
}