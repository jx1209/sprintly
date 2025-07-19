const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config();
const healthRoutes = require('./routes/health');

app.use(cors());
app.use(express.json());
app.use('/api/users', require('./routes/users'));

app.use('/health', healthRoutes);

const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);

const sprintRoutes = require('./routes/sprints');
app.use('/api/sprints', sprintRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Backend server is running at http://localhost:${PORT}`);
});