const {Client} = require('pg')

const client = new Client({

    host:"localhost",
    port: 5432,
    user: "postgres",
    password: "pakistan123",
    database:"demo"
})
client.connect()
// client.query("SELECT * FROM  demo_table WHERE name ='Fahad'",(err,res)=>{

//     if(!err)
//     {
//         console.log(res.rows);
//     }
//     client.end()
// })
module.exports = client