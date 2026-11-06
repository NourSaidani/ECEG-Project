const express = require('express');
const cors = require('cors');
const reservationRoutes = require('./reservationRoutes');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Charger les routes de réservation
app.use('/api/reservations', reservationRoutes);

app.get('/', (req, res) => {
    res.send("API ECEG (Easy Come Easy Go) est en cours d'exécution !");
});

app.listen(PORT, () => {
    console.log(`Serveur ECEG démarré sur http://localhost:${PORT}`);
});