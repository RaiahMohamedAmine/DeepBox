const jsw = require('jsonwebtoken');
const {JSW} = require('../../config');


async function Verifytoken (req,res,next){
    if (!req.headers.authorization)
    {
        res.status(400).json({
            type :"Err",
            message : "Bad Request"
        });
        return;
    }
    const token = req.headers.authorization.split(' ')[1];
    jsw.verify(token,JSW,(err,user)=>{
        if (err || !user){
            res.status(500).json({
                type :"Err",
                message : "No Authorized !"
            });
            return;
        }
        next();
    });
}

module.exports= Verifytoken;