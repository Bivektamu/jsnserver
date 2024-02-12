import express, {Router} from 'express'

const app = express()
const router = Router()
app.get('/', (req, res) => {
    res.json({message: 'Hello World!'})
})
// app.get('/home', (req, res) => {
//     res.json({message: 'This is homepage'})
// })

app.use('/', router)