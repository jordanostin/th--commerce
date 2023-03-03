export const Update = ({ match}) => {

    const productId = match.params.productId

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(productId)

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
  