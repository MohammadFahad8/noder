var client = require('../config/database.js')
var seq = require('../config/connection.js')
// const config = require('../config');
// console.log("from controller",config)
var getALL="SELECT * FROM demo_tables";
var insert="INSERT INTO USERS (name)VALUES('G.O.A.T')";
var options ;
const Cars = require('../models/cars.models.js');
const Books = require('../models/books.js');
// const User = require('../models/user.js');
// const Tasks = require('../models/tasks.js');
const db = require('../database/index.js')
const User = db.user 
const {Tasks} = db.tasks

const Sequelize = require('sequelize');
// const db = require('../models/index.js')


// client.query(getALL,(err,res)=>{

//     // console.log(res.rows)
//     options=res.rows
// })
exports.cars =async (req,res)=>{

    const resp = await Cars(db.sequelize,db.Sequelize).findAll({
        attributes: ['name', ['email', 'edu']]
        ,where: {
            id: 2
          } 
    //,
    });
    res.json(resp)
    // console.log(res.json(resp))
}

exports.allStudents = (req,res)=>
{
    // const options = [{"name":"FahadRAO","age":"25"},{"name":"Ali","age":"24"},{"name":"daud","age":"24"},{"name":"zohaib","age":"24"}];
    // res.render('Index',{results:options})

}
exports.allBooks = async(req,res)=>{
    
    // console.log("INDEXER",seq)
const bookme = await Books(db.sequelize,db.Sequelize).findAll()
    res.json(bookme)

// console.log(JSON.stringify(bookme))
}

exports.usertasks = async(req,res)=>{
 
    // const users =  await User(db.sequelize,db.Sequelize).findAll({
    const users =  await User.findAll({
        
        include:["user_tasks"]
    });
    res.json(users)
    console.log("All users with their associated tasks:", JSON.stringify(users, null, 4));
}
exports.taskstousers = async(req,res)=>{
 
    // const users =  await User(db.sequelize,db.Sequelize).findAll({
    const users =  await Tasks.findAll({
        
        include:["task_user"]
    });
    res.json(users)
    console.log("All users with their associated tasks:", JSON.stringify(users, null, 4));
}