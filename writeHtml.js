const http = require("http");
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(`<input name="first_name" style="text-align:center;background:orange;color:purple" placeholder="Enter Name"/>`)
    res.end()
}).listen(3850);