const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connect = require('./db/connect');
const routes = require('./routes/userRoutes');


const app = express();
app.use(bodyParser.json());
app.use(cors({
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'], 
}));

app.use(express.json())
app.use('/',routes)
app.get('/',(req,res)=>{
  res.send("Reminder app is live...")
})
connect().then(res=>{
  console.log("connected to database");
}).catch(e=>{
console.log("error in connected to database");
})
const port=8080;
app.listen(port,()=>{
  console.log(`server listening on http://localhost:${port}`);
})
  