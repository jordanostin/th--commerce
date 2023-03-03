import { useEffect, useState } from "react";

export const Product = () => {

    const [products, setProducts] = useState([]);
    const [users, sestUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/admin')
            .then(res => {
                res.json()
                console.log(res);
            })
            .then(data => {
                setProducts(data.products);
                sestUsers(data.users);
            })
            .catch(err => console.log(err));
    },[])

    return(
        <>
            <h2>Product</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>
        </>

    );
}