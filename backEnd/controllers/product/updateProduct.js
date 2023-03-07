import Product from "../../models/productSchema.js";

export const updateProduct = (req, res) => {

    const productId = req.params.id;

    const update = {
        name: req.body.name,
        description: req.body.description,
        img: req.body.img,
        price: req.body.price,
        quantity: req.body.price
    };

  
    Product.updateOne({ _id: productId }, update)
        .then(() => {
        res.status(200).json({update})
        })
        .catch((err) => {
        console.error(err);
        res.status(500).json({message: 'Erreur de la mise à jour'});
        });
    
}