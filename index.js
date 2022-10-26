const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json');
const details = require('./data/details.json');
const course = require('./data/course.json');

app.get('/all-courses', (req, res) => {
    res.send(courses);
});

app.get('/courses', (req, res) => {
    res.send(details);
});

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const item = course.find(itm => itm.id == id);
    res.send(item);
});

app.listen(port, () => {
    console.log('server running successfully')
})