import jwt from 'jsonwebtoken';
import User from '../../models/userSchema';

export const verifyToken  = async (req, res) => {
    res.send('ok');

    const header = req.headers.authorization;
    const token = header && header.split(' ')[1];

    if(!token){
        return res.status(401).send('nope')
    }

    jwt.verify(token, 'key_secret', async(err, decoded) => {

        if(err){
            res.status(403).send('Unauthorized');
            return
        }

        const user = await User.findOne({_id: decoded.id})
        res.status(200).json({
            user:{
                email: user.email,
                isAdmin: user.isAdmin
            }
        })
    })
};