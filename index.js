const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Sneaker = require('./schema.js');
const generateRandomId = require('./lib.js');
const bodyParser = require('body-parser');

dotenv.config({
    path: './.env.local',
});

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose
    .connect(process.env.MONGO_DB_URL)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB', err);
    });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
    Sneaker.find()
        .then((sneaker) => {
            res.json(sneaker);
        })
        .catch((err) => {
            res.json({
                status: 400,
                message: err,
            });
        });
});

app.get('/add-sneaker', (req, res) => {
    const sneaker = new Sneaker({
        ...req.body,
    });

    sneaker
        .save()
        .then(() => {
            res.send({
                status: 200,
                message: 'sneaker added',
            });
        })
        .catch((err) => {
            res.send({
                status: 400,
                message: err,
            });
        });
});

app.get('/get-sneaker/:id', (req, res) => {
    const sneakerId = req.params.id;

    Sneaker.findOne({ id: sneakerId })
        .then((sneaker) => {
            res.json(sneaker);
        })
        .catch((err) => {
            res.json({
                status: 400,
                message: err,
            });
        });
});
