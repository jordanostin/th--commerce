import productSchema from '../../models/productSchema.js';
import userSchema from '../../models/userSchema.js';

export const admin = async (req,res) => {
    
    try{
        const products = await productSchema.find({});
        const users = await userSchema.find({})
        
        res.send({ products, users });
        console.log(products, users);

        }catch(err){
            console.log(err);
    }
}