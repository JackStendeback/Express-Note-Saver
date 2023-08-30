const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3001;

// * Middleware needed for this backend project
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// * Routes, specifically the root route ('/)
app.get('/', (req, res) => {
    res.send('This is a test!');
});

// * Starting the server, making sure it runs and loads successfully.
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})