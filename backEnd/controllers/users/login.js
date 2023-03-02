import userSchema from '../../models/userSchema.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const login = (req, res) => {
    
    const email = req.body.email;
    const password = req.body.password;
    
    userSchema.findOne({ email: email })
        .then(user => {
            bcrypt.compare(password, user.password, (err, match) => {
                if (err) {
                    console.log(err);
                    return res.send('erreur 2');
                }
                
                if (!match) {
                    return res.send('identifiant invalide 2');
                }else{
                    const token = jwt.sign({ email: user.email, isAdmin: user.isAdmin, _id: user._id}, 'key_secret');
                    user = {
                        email: email,
                        isAdmin: email === 'milo@gmail.com',
                        _id: user._id,
                    }
                    res.status(201).json({user, token})
                } 
                
            })
        })
        .catch((err) => res.send(err))
   
};

