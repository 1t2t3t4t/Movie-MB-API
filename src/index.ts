import express from 'express'
import bodyParser from 'body-parser';
import HomeRouterController from './v1/home/index';
import { Container } from "anno-express";
import MovieRouterController from "./v1/movie";
import DB from "./DB/DB";

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

app.use((req, res, next) => {
	console.log('path', req.url, req.method)
	console.log('body', req.body)
    console.log('auth headers', req.headers.authorization)
    console.log('====HEADER====')
    console.log(req.headers)
    console.log('==============')
	next()
})

Container.register(app, HomeRouterController)
Container.register(app, MovieRouterController)

app.listen(PORT, () => {
    console.log("Server is up at port", PORT)
})