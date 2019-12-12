require('dotenv').config()
const express = require('express')
const app = express()
const { SERVER_PORT } = process.env

app.listen(SERVER_PORT, () => console.log(`Mastery Path listening on port ${SERVER_PORT}!`))