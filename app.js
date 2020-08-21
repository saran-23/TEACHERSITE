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
app.use('/adminpage1.html', (req, res) => {
    return res.sendfile(path.join(__dirname, 'public',
        'html', 'adminpage1.html '));
})
app.listen(port, () => {
    console.log(`Server started http://localhost:${port}/homepage`);
});

//  Home, Syllabus, Qb, Materials, QA, Practicals, Video Lectures