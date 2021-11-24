const http = require("http");
const filerw = require('fs');
const { redis } = require("googleapis/build/src/apis/redis");
http.createServer((req,res)=>{
filerw.readFile('customFile.html',(requ,resp)=>{
    res.writeHead(200,{"Content-Type" : "text/html"})
    res.write(resp)
    return  res.end();
    
})
filerw.writeFile('customFile.html',"TEXT FROM B:ACK",(w,r)=>{

   if(w)
   {
       console.log(w)
   }else
   {
       console.log(r)
   }
})
}).listen(3850)
// http.listen(4000);