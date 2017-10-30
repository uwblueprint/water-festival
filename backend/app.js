const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


app.post('/', function (req, res) {
  if(req.body.address){
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(search.search(req.body.address)));
  }else{
    res.send("{}") 
  }
})

app.listen(9090, function () {
  console.log('Backend server is listening on port 9090!')
})
