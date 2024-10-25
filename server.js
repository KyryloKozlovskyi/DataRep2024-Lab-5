// Basic Express server
const express = require('express'); // Use the express module
const path = require('path'); // Use the path module
const app = express(); // Creates an Express application
const port = 3000; // Port

// Routes HTTP GET requests to the specified path and
// returns a list of movie objects in JSON format
app.get('/api/movies', (req, res) => {
    // JSON of movie objects
    const movies = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://example.com/poster1.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://example.com/poster2.jpg"
        },
        {
            "Title": "World War Z",
            "Year": "2013",
            "imdbID": "tt0816711",
            "Type": "movie",
            "Poster": "https://example.com/poster3.jpg"
        }
    ];
    res.status(200).json({ myMovies: movies }); // Returnes the movies as a JSON response
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

// Routes HTTP GET requests to the specified path and
// returns a static html page
app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Middleware to serve all static files (CSS, JS, etc.)
app.use(express.static('public'));