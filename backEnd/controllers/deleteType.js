import Product from "../models/productSchema.js";
import User from "../models/userSchema.js";

export const deleteType = async (req,res) => {
    
    let type = '';
    
    switch(req.params.type){
        case 'user': type = User; break
        case 'product': type = Product; break
    }
    
    const id = req.params.id

    try {
        await type.findByIdAndDelete(id);
        console.log("Successful deletion");
    } catch (err) {
        console.log(err);
    }
}