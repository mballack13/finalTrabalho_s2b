const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/DB');

    const app = express();

    mongoose.Promise = global.Promise;
    mongoose.connect(config.DB).then(
      () => {console.log('Database is connected') },
      err => { console.log('Can not connect to the database'+ err)}
    );
    const adUnitRoutes = require('./routes/adunit.route');

    app.use(bodyParser.json());
    app.use(cors({
      'allowedHeaders': ['sessionId', 'Content-Type'],
      'exposedHeaders': ['sessionId'],
      'origin': '*',
      'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
      'preflightContinue': false
    }));
    const port = process.env.PORT || 4000;

    app.use('/adunits', adUnitRoutes);

    const server = app.listen(port, function(){
     console.log('Listening on port ' + port);
    });
