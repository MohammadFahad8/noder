const express= require('express')
const app = express()
var fileex = require('./example.json')
var path = require('path')
const fs = require('fs')
var dta={books:[{title:"FAHAD has a book"}]}
var data = dta.books

console.log(path.resolve(__dirname, 'example.json'))
var file_content= fs.readFileSync(path.resolve(__dirname, 'example.json'))
console.log(JSON.parse(file_content))
var recievedFrom = JSON.parse(file_content)
var v =recievedFrom.books || recievedFrom
var newContent = {books:[...v,...data]}
fs.writeFile('example.json', JSON.stringify(newContent,null,2), (err) => {
    if (err) throw err;
    console.log('Data written to file');
});
app.listen(3003,(req,res)=>{
    console.log("PORT WORKING")
})