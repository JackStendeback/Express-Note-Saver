const express = require('express');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3001;
const notesData = JSON.parse(fs.readFileSync('db/db.json', 'utf-8'));


// * Middleware needed for this backend project
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// * Routes, specifically the root route ('/)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'notes.html'));
  });

  app.get('/api/notes', (req, res) => {
    res.json(notesData);
  });

  app.post('/api/notes', (req, res) => {
    const newNote = {
      id: uuidv4(),
      title: req.body.title,
      text: req.body.text
    };
    notesData.push(newNote);
    fs.writeFileSync('db/db.json', JSON.stringify(notesData));
    res.json(newNote);
  });

// * Starting the server, making sure it runs and loads successfully.
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})