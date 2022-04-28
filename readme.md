npm init -y

npm install express mysql dotenv cors body-parser

npm install nodemon --save-dev

git init

git branch -M main

git push origin main


variables => PORT=3000

"scripts": { "start": "nodemon ./src/server.js",

#creating initial routes file:

const express = require ('express') const router = express.Router()

module.exports = router

#creating initial server file:

require('dotenv').config({path:'variables.env'}) const express = require ('express') const cors = require('cors') const bodyParser = require('body-parser')

const routes = require('./routes')

const server = express() server.use(cors()) server.use(bodyParser.urlencoded({extended:false}))

server.listen(process.env.PORT, () => { console.log(Server running on: http://localhost:${process.env.PORT}) })
