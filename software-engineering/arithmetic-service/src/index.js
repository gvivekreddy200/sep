"use strict";

const express = require('express');
const cors = require('cors');
const {add} = require('./arithmetica');
const app = express();
app.use(cors());
const port = 3000;

app.get('/', (_, res) => {
    res.send('Arithmetic Service');
});

app.get('/sum', (req, res) => {
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);
    const sum = num1 + num2;
    res.send(`${sum}`);
});

app.get('/add/:n/:m', (req, res) => {
    let n = Number(req.params.n);
    let m = Number(req.params.m);
    let sum = add(n, m);
    res.json(sum);
});

app.get('/subtract/:n/:m', (req, res) => {
    let n = Number(req.params.n);
    let m = Number(req.params.m);
    let difference = n - m;
    res.json(difference);
});

app.get('/multiply/:n/:m', (req, res) => {
    let n = Number(req.params.n);
    let m = Number(req.params.m);
    let product = n * m;
    res.json(product);
});

app.get('/divide/:n/:m', (req, res) => {
    let n = Number(req.params.n);
    let m = Number(req.params.m);
    let quotient = n / m;
    res.json(quotient);
});

app.get('/prime/:n', (req, res) => {
    let n = Number(req.params.n);
    let prime = true;
    if (n === 1) {
        prime = false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            prime = false;
        }
    }
    res.json(prime);
});

app.listen(port, () => {
    console.log('Server is running on port 3000');
});
