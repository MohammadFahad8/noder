var events = require("events")
const http  = require("http")
var EventBus = new events.EventEmitter();




http.createServer((req,res)=>{

    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write('<button onclick="trigger()">Click to Display Message</button>');
    
    EventBus.on("someevent",(data)=>{
        console.log(data)
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    })
    EventBus.emit("someevent","some random data");

}).listen(3850);
