const express =  require('express')
const serverless =  require('serverless-http')

const app = express()
const router = express.Router()
router.get('/', (req, res) => {
    res.json({message: 'Hello World!'})
})
// app.get('/home', (req, res) => {
//     res.json({message: 'This is homepage'})
// })

app.use('/', router)
module.exports.handler = serverless(app)