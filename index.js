const express = require('express');
const app = express();
const helloRoutes = require('./src/routes/helloRoutes');

app.use(express.json());

app.use('/api', helloRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
