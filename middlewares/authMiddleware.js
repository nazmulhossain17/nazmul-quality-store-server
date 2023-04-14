import JWT from 'jsonwebtoken'


export const requireSignIn = async(req, res, next) =>{
    try{
        const decode = JWT.verify(req.headers.authorization, process.env.SECRET_KE)
        next()
    } catch(error){
        console.log(error)
    }
}