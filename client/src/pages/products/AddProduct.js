import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../../store/slices/product/productSlice";

export const AddProduct = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {

        e.preventDefault();

        const newProduct = new FormData(e.target); 

        const token = localStorage.getItem('token');

        fetch('http://localhost:9001/admin/add-product', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: newProduct.get('name'),
                description: newProduct.get('desc'),
                img: newProduct.get('img'),
                price: newProduct.get('price'),
                quantity: newProduct.get('quantity')
            })
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            
            const name = data.product.name
            const description = data.product.name
            const img = data.product.img
            const price = data.product.price
            const quantity = data.product.quantity

            dispatch(addProduct({name, description, img, price, quantity}))

        })
        .catch((err) => console.log(err));

        navigate('/')
        
    }

    return(
        <>
            <h1>Add product</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type='text' id='name' name='name'/>

                <label htmlFor="desc">Description</label>
                <textarea id='desc' name='desc'/>

                <label htmlFor="img">Image</label>
                <input type='file' id='img' name='img'/>

                <label htmlFor="price">Price</label>
                <input type='number' id='price' name='price'/>

                <label htmlFor='quantity'>Quantity</label>
                <input type='number' id='quantity' name='quantity'/>

                <input type='submit' value='Add'/>
            </form>
        </>
    );
}