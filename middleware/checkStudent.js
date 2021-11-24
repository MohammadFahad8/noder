module.exports =  (req, res, next)=> {
    
      // Implement the middleware function based on the options object
      console.log(`FROM FILE: ${req.originalUrl}`)
      next()
    
  }