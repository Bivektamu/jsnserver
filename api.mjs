import express, {Router} from 'express'
import serverless from "serverless-http";

const app = express()
const router = Router()
app.get('/', (req, res) => {
    res.json({message: 'Hello World!'})
// })
// app.get('/home', (req, res) => {
//     res.json({message: 'This is homepage'})
// })

application.use('/', router)

export const handler = serverless(api)