const express = require('express');
const app = express();
const router = express.Router();
const mw = require('../middleware/checkStudent.js')
const lu = require('../middleware/isLoggedIn.js')
const studentController = require('../controllers/student.controller')
const Authcontroller = require('../controllers/Authcontroller')
const midds = {
    mw,lu
}
const options = [{"name":"Fahad","age":"25"},{"name":"Ali","age":"24"},{"name":"daud","age":"24"},{"name":"zohaib","age":"24"}];



router.get('/fahad/:id',[midds.mw,midds.lu],(req,res)=>{
// const opOg =  [{"name":"Ali","age":"24"},{"name":"Fahad","age":"25"}]
    // var p = options.sort((a,b)=>opOg.indexOf(b)-opOg.indexOf(a))
    // res.json(req);
    var op = options.filter((row)=>row.age == req.params.id)
    res.json(op)
})
// router.get('/fahad',[midds.mw,midds.lu],(req,res)=>{
// // const opOg =  [{"name":"Ali","age":"24"},{"name":"Fahad","age":"25"}]
//     // var p = options.sort((a,b)=>opOg.indexOf(b)-opOg.indexOf(a))
//     // res.json(req);
    
//     res.json(options)
// })
var multer = require('multer')

const multerConf ={
    storage: multer.diskStorage({
        destination:function(req,file,next)
        {
            next(null,"./uploads/users")
        },
        filename:function(req,file,next)
        {
            const ext = file.mimetype.split("/")[1];
            next(null,file.fieldname+'-'+Date.now()+'.'+ext);
            

        }
    }),
    fileFilter:function(req,file,next)
    {
        if(!file){
            next();
        }
        const image = file.mimetype.startsWith('image/');
        if(image)
        {
            next(null,true)
        }else
        {
            
             next({message:"Unsupported tpye"},false)
        }

    }
}

var upload = multer(multerConf)

router.get('/fahad',studentController.allStudents)
router.get('/books',studentController.allBooks)
router.get('/cars',studentController.cars)
router.get('/user-tasks',studentController.usertasks)
router.get('/tasks',studentController.taskstousers)
router.post("/imgUpload",upload.array('photo',3),studentController.uploadForm)
router.post('/fahad',(req,res)=>{

    console.log(req)
})
router.get("/verifyToken",Authcontroller.checkToken)
router.post("/login",Authcontroller.login)
router.get("/logout",Authcontroller.logout)

module.exports = router;