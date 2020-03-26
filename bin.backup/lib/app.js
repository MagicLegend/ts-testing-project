"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const errorhandler = require("strong-error-handler");
// import movies from './routes/movies.ts.disabled';
// import actors from './routes/actors.ts.disabled';
const app = express();
exports.default = app;
// middleware for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// middleware for json body parsing
app.use(bodyParser.json({ limit: '5mb' }));
// enable corse for all origins
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Expose-Headers', 'x-total-count');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
    res.header('Access-Control-Allow-Headers', 'Content-Type,authorization');
    next();
});
// app.use('/movies', movies);
// app.use('/actors', actors);
app.use(errorhandler({
    debug: process.env.ENV !== 'prod',
    log: true,
}));
//# sourceMappingURL=app.js.map