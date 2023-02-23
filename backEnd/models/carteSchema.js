import mongoose from 'mongoose';
import userSchema from './userSchema';
import productSchema from './productSchema';

const carteSchema = mongoose.Schema({
    
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    product:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }

},{
    timestamp: true
});

export default mongoose.model('Carte', carteSchema);