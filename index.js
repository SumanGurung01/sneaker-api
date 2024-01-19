const express = require('express');
const bodyParser = require('body-parser');
const data = require('./data.js');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.json(data);
});

app.get('/get-sneaker/:id', (req, res) => {
    const sneakerId = req.params.id;

    data.forEach((sneaker) => {
        if (sneaker.id == sneakerId) {
            res.json(sneaker);
        }
    });

    res.json(null);
});
