import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/slices/product/productSlice";

export const Update = () => {

    const  dispatch = useDispatch();
    const navigate = useNavigate();
    const {productId} = useParams();

    const handleSubmit = (e) => {
        e.preventDefault();
      
        const formData = new FormData(e.target);
        const product = {};
      
        if (formData.get('name')) {
            product.name = formData.get('name');
        }
    
        if (formData.get('desc')) {
            product.description = formData.get('desc');
        }
    
        if (formData.get('price')) {
            product.price = formData.get('price');
        }
    
        if (formData.get('quantity')) {
            product.quantity = formData.get('quantity');
        }
      
        fetch(`http://localhost:9001/admin/products/${productId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          dispatch(addProduct(data));
          
        })
        .catch(err => console.log(err));

        navigate('/admin');
    };
      
  
    return (
      <>
        <h1>Update</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
  
          <label htmlFor="desc">Description</label>
          <textarea id="desc" name="desc" />
  
          <label htmlFor="img">Image</label>
          <input type="file" id="img" name="img" />
  
          <label htmlFor="price">Price</label>
          <input type="number" id="price" name="price" />
  
          <label htmlFor="quantity">Quantity</label>
          <input type="number" id="quantity" name="quantity" />
  
          <input type="submit" value="Update" />
        </form>
      </>
    );
  };
  