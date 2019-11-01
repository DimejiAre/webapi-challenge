const express = require('express');
require('dotenv').config();
const cors = require('cors');
const helmet = require('helmet');

const server = express();

server.use(cors());
server.use(express.json());

server.get('/', (req,res) => {
    res.send(`Welcome to Dimeji's Api`)
})

module.exports = server;