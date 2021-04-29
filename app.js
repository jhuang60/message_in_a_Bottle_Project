//define middlewares
const express = require('express');
const app = express();
const morgan = require('morgan'); //morgan middleware function that handle requests
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//define routes
const messageRoutes = require('./api/routes/messages');
//establish mongodb connections
mongoose.connect('mongodb+srv://jhuang60:' + process.env.MONGO_ATLAS_PW +
    '@cluster0.ntewt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' ,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
    }
);

//register middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//enable cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods',
            'PUT, POST, PATCH, DELETE, GET'
        );
        return res.status(200).json({});
    }
    next();
});

//manage and specify directories
app.use(express.static(__dirname));
console.log("This is the directory listed in __dirname " + __dirname);
app.use('/message', express.static(__dirname + '/api/views/message.html'));

// Routes which should handle requests
app.use('/messages', messageRoutes);

//handle errors
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;

    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.sendFile(__dirname + '/api/views/404.html');//direct to 404 page
});

module.exports = app;
