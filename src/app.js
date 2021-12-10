const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Ajouter les routes via les routers
const sportRouter = require('./routers/sport.router');
app.use('/api', sportRouter);
// ... A COMPLETER ...

// Connexion à la base de données
require('./database/mongodb');

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Serveur lancé sur le port ${port} 🚀`);
});

