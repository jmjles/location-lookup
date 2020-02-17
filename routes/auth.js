module.exports = (req,res,next)=> {
    req.headers.authorization === process.env.AUTH ? next() : res.status(400).json({error:'Unauthorized'})
}