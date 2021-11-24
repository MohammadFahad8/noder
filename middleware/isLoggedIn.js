module.exports = (req, res, next)=>
{
    if(req.params.id == 25){
    console.log(`USER IS LogGED IN AT PATh: ${req.originalUrl}`)
    next()
}else
{
    // res.sendFile(__dirname+'/error/error.html')
    res.json({errors:[{status:false,error:true,message:"Invalid url"}]})
}
}