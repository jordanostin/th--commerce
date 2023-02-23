import bcrypt from 'bcrypt';
import userSchema from '../../models/userSchema.js';

export const register = (req, res) => {
    
    const { name, email, password, isAdmin} = req.body;
    
    const saltRounds = 10;
    
    bcrypt.hash(password, saltRounds, (err, hash) => {
        
        if(err){
            console.log(err);
            return;
        }
        
        const newUser = new userSchema({
            name,
            email,
            password: hash,
            isAdmin: isAdmin ? true : false
        });
        
        newUser.save((err) => {
            if(err){
                console.log(err);
                return;
            }
        })
    });
        
};