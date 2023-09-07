require('dotenv').config
const express = require('express')
const server = express()
const PORT = 3001 || process.env.PORT

const cookieParser = require('cookie-parser')
const MongoStore = require('connect-mongo')
const session = require('express-session')

const authRoute = require('./src/routes/auth')

server.use(express.urlencoded())
server.use(express.json())
server.use(cookieParser())

server.listen(PORT, () => console.log(`Server is clean & live on Port ${PORT}`))