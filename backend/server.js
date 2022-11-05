require('dotenv').config()
const cors = require("cors");

const corsOptions ={
   origin:'*', 
   credentials:true,
   optionSuccessStatus:200,
}

var express = require('express'),
  app = express(),
  port = process.env.PORT || 8080,
  mongoose = require('mongoose'),
  Professional = require('./api/models/professionalListModel');
  bodyParser = require('body-parser');
  
mongoose.Promise = global.Promise;
mongoose
     .connect( process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
     .then(() => console.log( 'Database Connected' ))
     .catch(err => console.log( err ));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors(corsOptions))

var routes = require('./api/routes/professionalListRoutes');
routes(app);

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);