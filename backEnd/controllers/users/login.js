import userSchema from '../../models/userSchema.js';
import bcrypt from 'bcrypt';

export const login = (req, res) => {
    
    const email = req.body.email;
    const password = req.body.password;
    
    userSchema.findOne({ email: email }, (err, user) => {
        
        if (err) {
          console.log(err);
          return res.send('erreur 1');
        }
    
        if (!user) {
          return res.send('identifiant invalide 1');
        }
    
        bcrypt.compare(password, user.password, (err, match) => {
            if (err) {
                console.log(err);
                return res.send('erreur 2');
            }
            
            if (!match) {
                return res.send('identifiant invalide 2');
            }else{
                req.session.user = {
                    email: email,
                    isAdmin: email === 'milo@gmail.com'
                }
                console.log(req.session.user)
            } 
            
        });
    });
};

