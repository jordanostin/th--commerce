import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Admin = () => {

    const [products, setProducts] = useState([]);
    const [users, sestUsers] = useState([]);

    useEffect(() => {

        const token = localStorage.getItem('token');
		const headers = {
			'Authorization': `Bearer ${token}`,
			'Content-type': 'application/json'
		};

        fetch('http://localhost:9001/admin/back-office', {headers})
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
                sestUsers(data.users);
            })
            .catch(err => console.log(err));
    },[])

    return(
        <>
            <h2>Product</h2>

            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Title</td>
                        <td colSpan='2'>Action</td>
                    </tr>
                </thead>
                
                <tbody>
                    {products.map((product,i) => (
                        <tr key={i}>
                            <td>{product._id}</td>
                            <td>{product.name}</td>
                            <td><Link to={`/update/${product._id}`}>Update</Link></td>
                            <td><Link to={`/delete/product/${product._id}`}>Delete</Link></td>
                        </tr>
                    ))}
                </tbody>
                
            </table>
            
            <h2>User</h2>
            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Email</td>
                        <td>Action</td>
                    </tr>
                </thead>
                
                <tbody>
                    {users.map((user,i) => (
                        <tr key={i}>
                            <td>{user._id}</td>
                            <td>{user.email}</td>
                            <td><Link to={`/delete/user/${user._id}`}>Delete</Link></td>
                        </tr>
                    ))}
                </tbody>
                
            </table>
        </>
        

    );
}