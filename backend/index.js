require('dotenv').config
const express = require('express')
const server = express()
const PORT = 3001 || process.env.PORT

server.listen(PORT, () => console.log(`Server is clean & live on Port ${PORT}`))