import mongoose from 'mongoose';
import express from "express";
import router from './router/route.js';
import cors from 'cors';


const PORT = 9001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://jordanostin:123@clusterapp.7ev62mm.mongodb.net/?retryWrites=true&w=majority');


mongoose.connection.on("error", () => {
    console.log("Erreur lors de la connexion à la base de données");
})

mongoose.connection.on("open", () => {
    console.log("Connexion à la base de donénes établie");
    app.use('/', router);
})



app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});