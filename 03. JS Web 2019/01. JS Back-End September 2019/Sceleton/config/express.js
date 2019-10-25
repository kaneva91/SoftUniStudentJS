const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const {cookieName} = require('../app-config');

module.exports = (app) => {
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(express.static(path.resolve(__basedir, 'static')));
    app.engine('.hbs', handlebars({
        extname: '.hbs',
        defaultLayout: 'main'
    }));
    app.set('views', path.resolve(__basedir, 'views'));
    app.use(cookieParser());

    app.use((req, res, next) => {
        res.locals.isLoggedin = res.cookies[cookieName] !== undefined;
        res.locals.username = req.cookies['username'];
    })
};