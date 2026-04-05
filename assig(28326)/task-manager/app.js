const express = require('express');
const app = express();
const connectDB = require('./config/db');
const taskRoutes = require('./routes/taskRoutes');

app.use(express.json());

// connect DB
connectDB();

// use routes
app.use('/api', taskRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});