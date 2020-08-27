const express = require('express');
const path = require('path');

const port = 8080;
const app = express();

app.use(express.static('public'));

app.use('/homepage', (req, res) => {
    return res.sendFile(path.join(__dirname, 'public', 'html', 'homepage.html'));
});

app.use('/question-bank', (req, res) => {
    return res.sendFile(path.join(__dirname, 'public', 'html', 'question-paper.html'));
});
app.use('/adminpage1', (req, res) => {
    return res.sendFile(path.join(__dirname, 'public', 'html', 'adminpage1.html'));
});

app.use('/adminpage2', (req, res) => {
    return res.sendFile(path.join(__dirname, 'public', 'html', 'adminpage2.html'));
});
app.listen(port, () => {
    console.log(`Server started http://localhost:${port}/adminpage2`);
});

//  Home, Syllabus, Qb, Materials, QA, Practicals, Video Lectures