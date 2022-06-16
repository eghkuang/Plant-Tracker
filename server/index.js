const express = require('express');

const controller = require('./controller.js');

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/allPlants', (req, res) => {
    //TODO - your code here!
    console.log('api/allPlants?');
    controller.getAllPlants((err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(results);
        }
    });
});

app.get('/api/card', (req, res) => {
    //TODO - your code here!
    controller.getOneCard(req.query, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(results);
        }
    });
});

app.patch('/api/phrases', (req, res) => {
    console.log('patch reqbody', req.body);
    controller.updatePhrase(req.body, (err, results) => {
        if (err) {
            console.log('patch err', err);
            res.status(500).send(err);
        } else {
            res.status(202).send(results);
        }
    });
});

//TODO - add additional route handlers as necessary

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
