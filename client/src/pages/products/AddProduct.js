export const AddProduct = () => {

    return(
        <>
            <h1>Add product</h1>
            <form>
                <label htmlFor="name">Name</label>
                <input type='text' id='name' name='name'/>

                <label htmlFor="desc">Description</label>
                <textarea id='desc' name='desc'/>

                <label htmlFor="price">Price</label>
                <input type='number' id='price' name='price'/>

                <label htmlFor='quantity'>Quantity</label>
                <input type='number' id='quantity' name='quantity'/>

                <input type='submit' value='Add'/>
            </form>
        </>
    );
}