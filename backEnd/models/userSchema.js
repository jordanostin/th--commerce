import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const userSchema = mongoose.Schema({
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

userSchema.pre('save', async function () {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
})



userSchema.methods.createJWT = function () {
    return jwt.sign({
        id: this._id,
        email: this.email
    }, 'key_secret', {expiresIn: '24h'})
}

export default mongoose.model('User', userSchema);