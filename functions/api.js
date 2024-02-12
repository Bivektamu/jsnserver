const express =  require('express')
const serverless =  require('serverless-http')
const cors = require('cors')
const content = require('../data')
const app = express()
const router = express.Router()

app.use(cors())

router.get(`/:page`, (req, res)=> {
    try {
        if(content && content[req.params.page]) {
            res.status(200).json(content[req.params.page])
        }
        else {
            throw new Error('Content not found')
        }
    } catch (error) {
        res.status(500).json({"error": error.message})
    }
})
app.use('/', router)
module.exports.handler = serverless(app)