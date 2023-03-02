import productSchema from '../../models/productSchema.js';

export const addProduct = (req, res) => {

    const {name, description, image, quantity, price } = req.body;
    
    const product = new productSchema({
        name,
        description,
        image,
        quantity,
        price
    })
    
    product.save()
    .then(() => {
        res.status(201).json({
            product:{
                name,
                description,
                image,
                quantity,
                price
            }
        })
    })
    .catch((err) => {
        return res.status(400).json({message : 'une erreur est survenue'})
    })
        
};