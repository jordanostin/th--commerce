import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const DeleteUsers = () => {

    const {userId} = useParams();
    const navigate = useNavigate();

    useEffect(() => {

        const token = localStorage.getItem('token');
		const headers = {
			'Authorization': `Bearer ${token}`,
			'Content-type': 'application/json'
		};

        fetch(`http://localhost:9001/admin/delete/user/${userId}`, {headers})
            .then(data => console.log(data))
            .catch(err => console.log(err))

        navigate('/admin');
        window.location.reload();

    }, [])
    
    return null
}