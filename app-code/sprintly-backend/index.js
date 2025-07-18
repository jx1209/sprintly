const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config();
const healthRoutes = require('./routes/health');

app.use(cors());
app.use(express.json());

app.use('/health', healthRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Backend server is running at http://localhost:${PORT}`);
});