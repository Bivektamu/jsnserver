const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const bodyParser = require("body-parser");
const content = require("../data");
const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());
// 
router.get(`/:page`, (req, res) => {
  try {
    if (content && content[req.params.page]) {
        console.log(content[req.params.page])
      res.status(200).json(content[req.params.page]);
    } else {
      throw new Error("Content not found");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// router.post(`/contact`, (req, res) => {
//     try {
//       if(req.body) {
//         console.log(req.body)
//           res.sendStatus(200)
//       }
  
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   });

app.use("/", router);
module.exports.handler = serverless(app);
