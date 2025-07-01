// server.js

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables from .env file
dotenv.config();

// Initialize the Express application
const app = express();

// Middleware
// Enable CORS for all routes, allowing your frontend to make requests
app.use(cors());
// Parse incoming JSON requests (e.g., from frontend forms)
app.use(express.json());

// Database Connection
// Get MongoDB URI from environment variables
const mongoURI = process.env.MONGO_URI; 

// Connect to MongoDB
mongoose.connect(mongoURI, {
    useNewUrlParser: true,      // Use the new URL parser
    useUnifiedTopology: true,   // Use the new server discovery and monitoring engine
})
.then(() => console.log('MongoDB connected successfully')) // Log success on connection
.catch(err => console.error('MongoDB connection error:', err)); // Log error if connection fails

// Basic Route
// A simple GET route to check if the API is running
app.get('/', (req, res) => {
    res.send('Excel Analytics Platform API is running...');
});

// --- Future Routes (Uncomment and implement as you build your features) ---
// User Authentication Routes
// app.use('/api/auth', require('./routes/authRoutes')); 

// Excel Upload and Analysis Routes
// app.use('/api/excel', require('./routes/excelRoutes')); 

// Dashboard and History Routes
// app.use('/api/dashboard', require('./routes/dashboardRoutes'));

// AI Tool Integration Routes (if applicable)
// app.use('/api/ai', require('./routes/aiRoutes'));

// Admin Routes
// app.use('/api/admin', require('./routes/adminRoutes'));


// Define the port for the server to listen on
// Use the PORT environment variable or default to 5000
const PORT = process.env.PORT || 5000; 

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Access the API at: http://localhost:${PORT}`);
});
