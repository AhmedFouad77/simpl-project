const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const DB_url = require('./db.config');
const app = express();
const port = process.env.PORT || 3333;
const user = require('./routes/user.route');

mongoose.Promise = global.Promise;
mongoose.connect(DB_url.db_url, { useNewUrlParser: true }).then(
    () => { console.log("Connected Mongodb Successfully") },
    (e) => { console.log("Can not Connected Mongodb The Error: " + e); }
);

// Solve CORS POLICE
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE');
    next();
});

app.use(bodyParser.json());
app.use('/users', user);


app.listen(port, "127.0.0.1", () => {
    console.log('Server Run On Port ' + port + ' :)--')
});