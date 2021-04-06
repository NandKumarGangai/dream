const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const express = require('express');
const jwt = require('jsonwebtoken');
const compression = require('compression');
const dbConnect = require('./db/connection');
const routes = require('./routes');

require('dotenv').config();

const PORT = process.env.PORT || 8000;

const runServer = app => {
    app.use(cors());
    app.use(helmet());
    app.use(compression());
    app.use(express.json());
    app.use(express.static('build'));
    app.use('/api/v1', routes);

    app.get('/test', (req, res) => {
        return res.send('pong')
    });

    app.post('/test', (req, res) => {
        console.log('body: ', req.body);
        return res.status(200).json({
            success: true,
            data: req.body
        })
    });

    // app.post('/api/v1/register', (req, res) => {
    //     const token = jwt.sign({
    //         data: req.body.email
    //     }, process.env.JWT_SECRET, { expiresIn: 60 * 60 });

    //     console.log('token: ', token);
    //     res.status(200).json({
    //         success: true,
    //         token
    //     });
    // });

    // app.post('/api/v1/auth/login', (req, res) => {
    //     const token = req.header('Authorization').split('').slice(7,).join('');
    //     const decoded = jwt.verify(token, process.env.JWT_SECRET);
    //     console.log('decoded: ', decoded);
    //     res.status(200).json({
    //         success: true
    //     })
    // });

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });

    app.listen(PORT, () => {
        dbConnect();
        console.log(`Server is running on port ${PORT} in ${process.env.NODE_ENV} mode ....`);
    });
}

module.exports = {
    runServer
}

/**
 * Password in encrypt form
 * verify and sign new one
 */