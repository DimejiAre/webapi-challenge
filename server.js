const express = require('express');
require('dotenv').config();
const cors = require('cors');
const helmet = require('helmet');

const projects = require('./routers/projectRouter');

const server = express();

server.use(cors());
server.use(express.json());
server.use('/api/projects', projects)

server.get('/', (req,res) => {
    res.send(`Welcome to Dimeji's Api`)
})

module.exports = server;