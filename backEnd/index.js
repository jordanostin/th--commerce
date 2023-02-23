import mongoose from 'mongoose';
import express from "express";
import bodyParser from 'body-parser';
import router from './router/route.js';


const PORT = 9300;
const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://jordanostin:<Miloxy12*>@clusterapp.7ev62mm.mongodb.net/?retryWrites=true&w=majority');


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