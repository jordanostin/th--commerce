import User from "../../models/userSchema.js";
import bcrypt from "bcrypt"

export const updateUser = (req, res) => {

    const userId = req.params.id;

    const update = {
      password: req.body.password,
    };

    if(req.body.password){

        bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
            if (err) {
              console.error(err);
              return res.status(500).send("erreur 1");
            }
      
            update.password = hashedPassword;
      
            User.updateOne({ _id: userId }, update)
              .then(() => {
                res.status(200).send("mise à jour du mot de passe ok");
              })
              .catch((err) => {
                console.error(err);
                res.status(500).send("erreur 2");
              });
          });

    }
    
}