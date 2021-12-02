const express = require('express');
const sequelize = require('./config/connection');
var app = express();
var students = require('./routes/students');
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
})
// INSTALLED EXPRESS AND PRACTICING