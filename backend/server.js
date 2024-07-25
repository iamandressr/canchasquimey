const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(express.json());

// Configura la conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'canchasquimey'
});

// Ruta para obtener las canchas
app.get('/api/canchas', (req, res) => {
  connection.query('SELECT * FROM Canchas', (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

// Ruta para obtener los horarios
app.get('/api/horarios', (req, res) => {
  connection.query('SELECT * FROM Horarios', (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
