// Basic Express server
const express = require('express'); // Use the express pkg
const app = express(); // Creates an Express application
const port = 3000; // Port

// Routes HTTP GET requests to the specified path and
// outputs the welcome message
app.get('/', (req, res) => {
    res.send('Welcome to Data Representation & Querying'); // Welcome message
});

// Binds and listens for connections on the specified host and port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`); // Console log
});

// Mounts the specified middleware function to handle errors
app.use((err, req, res, next) => {
    console.error(err.stack); // Log error to the console
    res.status(500).send('Something went wrong!'); // Sets the HTTP status for the response
});