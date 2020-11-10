const config=require('config')
const jwt=require('jsonwebtoken')

function auth(req,res,next){
    const token=req.header('x-auth-token')

    //check for token
    if(!token) res.status(401).json({msg:'No token, Authorization denied'})//401 means unauthporized status
    try{
        // Verify Token
        const decoded=jwt.verify(token, config.get('jwtSecret'))
        // Add User from payload
        req.user=decoded
        next()

    }catch(e){
        res.status(400).json({msg:'Token is Not valid'})
    }    


    
    

}
module.exports=auth