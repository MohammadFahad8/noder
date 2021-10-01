let express = require('express');
let mongoose = require('mongoose')
let cors = require('cors')
let bodyParser = require('body-parser')
let db = require('./database/db')

//Express Route
const studentRoute = require('./routes/student.route')

mongoose.Promise  = global.Promise
mongoose.connect(db.db,{useNewUrlParser:true})
.then((res)=>{

    console.log("connected to database successfully")
})
.catch((err)=>{
    console.log("Database Connection Failure")
})

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use("/students",studentRoute)


//define port on which to serve project files

const port = process.env.PORT || 4000
const server = app.listen(port,()=>{
    console.log(`Starting server${port}`)
})

// 404 Error
// app.use((req, res, next) => {
//     next(createError(404));
//   });
  app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
  });