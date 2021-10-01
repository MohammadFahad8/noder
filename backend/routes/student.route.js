let mongoose = require('mongoose'),
  express= require("express"),
   router = express.Router();
   let studentSchema = require("../models/Student");

// CREATE Student
router.route('/add-student').post((req,res,next)=>{
    

    studentSchema.create(req.body,(err,data)=>{

            if(err)
            {
                return next(err)
            }
            else
            {
                console.log(data)
                res.json(data)
            }
    })

})

//get All Students Data

router.route('/students').get((req,res, next)=>{

    studentSchema.find((err,data)=>{

        if(err)
        {
            return next(err)
        }else
        {
            res.json(data)
        }
    })
})

//get single student

router.route('/students/:id').get((req,res,next)=>{

    studentSchema.findById(req.params.id, (err,data)=>{

        if(err)
        {
            return next(err)
        }else
        {
            res.json(data)
        }
    })
})
//update student

router.route("/update-student/:id").post((req,res, next)=>{

    studentSchema.findByIdAndUpdate(req.params.id,{$set:req.body},(err,data)=>{
        if(err)
        {
            return next(err)
        }else
        {
             res.json(data)
            console.log('Student updated successfully !')
        }

    })
})

//delete Student

router.route('/delete-student/:id').get((req,res, next)=>{

    studentSchema.findByIdAndRemove(req.params.id,(err,data)=>{
        if(err)
        {
            return next(err)
        }
        else
        {
            res.status(200).json({
                msg: "Deleted Successfully",
                status:"success",
                response:data,
              })
        }
    })
})

module.exports = router;