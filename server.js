var http = require('http');
var options  = {users:[{
    "name":"Fahad",
    "age":25,
    "email":"fahadrao1718@gmail.com"
},{
    "name":"Saad",
    "age":23,
    "email":"saadrao1718@gmail.com"
}]}
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application/json'})
    
    res.write(JSON.stringify(options))
    
    res.end();
}).listen("3800")