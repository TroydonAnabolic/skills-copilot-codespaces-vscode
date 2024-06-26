// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a comment
app.post('/comment', (req, res) => {
    res.send('Create comment');
});

// Get a comment
app.get('/comment/:id', (req, res) => {
    res.send('Get comment with ID: ' + req.params.id);
});

// Update a comment
app.put('/comment/:id', (req, res) => {
    res.send('Update comment with ID: ' + req.params.id);
});

// Delete a comment
app.delete('/comment/:id', (req, res) => {
    res.send('Delete comment with ID: ' + req.params.id);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
