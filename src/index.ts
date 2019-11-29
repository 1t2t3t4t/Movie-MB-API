import express from 'express'
import bodyParser from 'body-parser';
import HomeRouterController from './v1/home/index';
import { Container } from "anno-express";

const PORT = process.env.PORT || 3000

const app = express()

app.use(bodyParser.json())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    res.setHeader('Access-Control-Allow-Credentials', "true")
    next()
})

Container.register(app, HomeRouterController)

app.listen(PORT, () => {
    console.log("Server is up at port", PORT)
})