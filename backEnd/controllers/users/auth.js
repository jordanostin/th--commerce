import jwt from 'jsonwebtoken';
import userSchema from '../../models/userSchema.js';

export const verifyToken  = async (req, res) => {

    const header = req.headers.authorization;
    const token = header && header.split(' ')[1];

    if(!token){
        return res.status(401).json({mesage : 'no token provided'})
    }

    jwt.verify(token, 'key_secret', async(err, decoded) => {
        console.log(decoded);
        if(err){
            res.status(403).json({message : 'Unauthorized'});
            return
        }

        const user = await userSchema.findOne({_id: decoded._id})
        res.status(200).json({
            user:{
                email: user.email,
                _id: user._id,
                isAdmin: user.isAdmin
            }
        })
    })
};