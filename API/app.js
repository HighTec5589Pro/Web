const constants = require("./constants")
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./route')


const app = express();
const port = constants.serverPort;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(router);


app.get("/", (req, res) => {
    res.send('Hola, Bienvenido')
});

app.listen(port, () => {
    console.log('Server started running on : ' + port)
})