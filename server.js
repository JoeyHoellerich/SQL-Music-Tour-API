// DEPENDENCIES
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const sequelize = new Sequelize({
    storage: process.env.PG_URI,
    dialect: "postgres",
    username: process.env.PG_USER,
    password: process.env.PG_PASS
})

try {
    sequelize.authenticate()
    console.log(`Connected with Sequelize at ${process.env.PG_URI}`)
} catch (err) {
    console.log(`Unable to Connect at ${process.env.PG_URI}`)
}

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    })
})

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})