const dotenv = require("dotenv");
const express = require("express");
//var bodyParser = require('body-parser');
//const mongodb = require('mongodb').MongoClient;

dotenv.config();
const app = express();
//app.use(express.bodyParser());

/*app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', require('./routes/contactsRoute.js'));*/
  app.use(express.json());
  app.use(express.urlencoded({extended: true}));

const contacts_route = require('./routes/contactsRoute.js');
let PORT = process.env.PORT || 3000;
//const http = require('http');

/*let server = http.createServer((req, res) => 
{
    let url = new URL(req.url, `http://${req.headers.host}`);
    
    console.log(`recieved request @ url ${url}, method with ${req.method}.`);

    contacts_route(req,res);

}).listen(PORT);*/

app.use(contacts_route);

/*mongodb.initDb((err) => {
    if (err) {
      console.log(err);
    } else {
      app.listen(port);
      console.log(`Connected to DB and listening on ${port}`);
    }
  });*/

app.listen(PORT,()=>
{
    console.log('The server is running at port ' + PORT);
});