const express = require('express');
const { getRelativePath } = require('tslint/lib/configuration');
const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const oktaAuth = require('./auth');
// const hangman = require('./hangman');

// const port = process.env.port || 8080;

// const app = express().use(cors()).use(bodyParser.json()).use(bearerToken())
// .use(oktaAuth).use(hangman());

// mongoose.connect('mongodb://localhost:27017/hangman').then(() => {console.log('db connected');
// app.listen(port, () => {console.log('express server on ${port}')
// })
// });

const server = '127.0.0.1:27017';
const db = 'MoodTunes';

class initDatabase {
    constructor() {
        this.connect()
    }
connect() {mongoose.connect('mongodb://${server}/${db}').then(() => {console.log("db success")})
.catch(err => {console.error("error")})
}
};

const app = express();
var get = app.get('/', (req, res) => {res.send("response sent");})


app.listen(4010, () => {console.log('server listening');})


module.exports = new initDatabase();

