import userSchema from '../../models/userSchema.js';

export const register = (req, res) => {

    const { email, password} = req.body;
    
    userSchema.findOne({email: email}, (err, userExist) => {

        if(err) throw err;

        if(userExist){
            res.status(400).json({ message: 'Cet email existe déjà.' });
        }else{
            const user = new userSchema({
                email,
                password
            })
            const token = user.createJWT();
            user.save()
            .then(() => {
                res.status(201).json({user, token})
            })
            .catch((err) => console.log(err))

            
        }
    })
    console.log("User created: ", userSchema);
        
};