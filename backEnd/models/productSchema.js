import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    
    name: {
        type: String
    },
    description: {
        type: String
    },
    image:[
        {type: String}
    ],
    quantity: {
        type: Number
    },
    price:{
        type: Number
    }
    
},{
    timestamp: true
});

export default mongoose.model('Product', productSchema);