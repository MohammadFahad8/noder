var formiddable = require('formidable')
var express = require('express')
var app = express()
var fs= require('fs')
var port = 3030
app.get('/',(req, res, next) =>{

    res.writeHead(200,{"Content-Type": "text/html"})
    res.write(`<form action="uploadFIle" enctype="multipart/form-data" method="POST">`)
    res.write(`<input type="file" name="imgToUpload"/>`)
    res.write(`<input type="submit" name="upload"/>`)
    res.write(`</form>`)
    res.end()
})
app.post('/uploadFile',(req,res)=>{

    var form = new formiddable.IncomingForm();
    form.parse(req,(err,fields,files)=>{

        var oldPath =files.imgToUpload.filepath;
        var newPath = __dirname+"/public/images/"+"__goat__"+files.imgToUpload.originalFilename
            fs.rename(oldPath,newPath,(err)=>{
                if(err) throw err;
                res.writeHead(200, {'Content-Type': 'application/json'});
                res.write(JSON.stringify({"status":'Image uploaded successfully'}));
                res.end();
            });
    })
})
app.listen(port,()=>{
    console.log(`Listenening at ${port}`)
})