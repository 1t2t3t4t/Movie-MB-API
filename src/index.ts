import { register } from './framework/annotation-restapi/index';
import express from 'express'
import bodyParser from 'body-parser';
import HomeRouterController from './v1/home/index';

const PORT = process.env.PORT || 3000

const app = express()

app.use(bodyParser.json())

register(app, HomeRouterController)

app.listen(PORT, () => {
    console.log("Server is up at port", PORT)
})