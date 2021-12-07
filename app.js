const express = require('express');
const sequelize = require('./config/connection');
var app = express();
var students = require('./routes/students');
const bodyParser = require('body-parser')
var cors = require("cors");
var path = require('path')
var cookieParser = require("cookie-parser");
var multer = require('multer');
var upload = multer();
var port = 3855
// var client = require('./models/student.model.js')
// console.log("REQUIRED",client)
app.set('view engine','ejs');
const options = [{"name":"Fahad","age":"25"},{"name":"Ali","age":"24"},{"name":"daud","age":"24"},{"name":"zohaib","age":"24"}];
const adminoptions = [{"name":"Admin","age":"25"},{"name":"second admin","age":"24"},{"name":"third admin","age":"24"},{"name":"fourth admin","age":"24"}];
const testMW = (req,res,next)=>{

if(2<3){
    res.redirect('/abc')

}else
{
    console.log(`THIS Test MIDDLEWARE IS APPLIED TO THIS ROUTE:${req.originalUrl}`);
        next()
}
}
const checkIfLoggedIn = (req,res,next)=>{
console.log(req.query)
if(req.query.role == 'user'){
    res.redirect('/students')

}else
{
    console.log(`THIS Test MIDDLEWARE IS APPLIED TO THIS ROUTE:${req.originalUrl}`);
        next()
}
}
app.use(cookieParser())
app.use("/uploads", express.static("uploads/users"));
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(upload.array('fileslist', 1)); 
// app.use(express.static('public'));

app.use(cors())

app.get('/c',(req,res)=>{

    console.log('Signed Cookies: ', req.signedCookies)
})
app.use('/students',students)

app.get('/test',[testMW], (req,res)=>{

    res.render("Index",{results:options})
})
app.get('/abc',[checkIfLoggedIn], (req,res)=>{

    res.render("Index",{results:options})
})
// app.get('/fahad',(req,res)=>{

//     res.writeHead(200,{'Content-Type': 'text/html'})
//     students.map((row)=>(
//         res.write(`<h1>${row.name}</h1>`)
//     ))
    
//     res.end();
// })

sequelize.sync();
app.listen(port,(err,res)=>{

    console.log(`connected on port number:${port}`)
    // console.log(`connected on port number:${__dirname}+/public/images/download.png`)
})
// INSTALLED EXPRESS AND PRACTICING