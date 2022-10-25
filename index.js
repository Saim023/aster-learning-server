const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json');

app.get('/all-courses', (req, res) => {
    res.send(courses);
});

app.listen(port, () => {
    console.log('server running successfully')
})