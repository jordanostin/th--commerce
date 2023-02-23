import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    
    name: {
        type: String
    },
    email: {
        type: String
    },
    password:{
        type: String
    },
    isAdmin: {
        type: {type: Boolean, default: false}
    }
},{
    timestamp: true
});

export default mongoose.model('User', userSchema);