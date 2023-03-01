import userSchema from '../../models/userSchema.js';

export const register = (req, res) => {

    const { email, password, isAdmin} = req.body;
    
    const user = new userSchema({
        email,
        password,
        isAdmin: email == 'milo@gmail.com'
    })
    const token = user.createJWT();
    user.save()
    .then(() => {
        res.status(201).json({
            user:{
                email: user.email,
                id: user._id,
                isAdmin: user.isAdmin
            },
            token
        })
    })
    .catch((err) => {
        return res.status(400).json({message : 'une erreur est survenue'})
    })
        
};