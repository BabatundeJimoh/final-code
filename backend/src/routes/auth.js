const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
// const jwtSecret = process.env.JWT_SECRET


module.exports = router