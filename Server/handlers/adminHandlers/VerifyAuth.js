const jsw = require('jsonwebtoken');
const {JSW} = require('../../config');


async function VerifyAuth (req,res){
    if (!req.headers.authorization)
    {
        res.status(400).json({
            type :"Err",
            message : "Bad Request"
        });
        return;
    }
    const token = req.headers.authorization.split(' ')[1];
    console.log(token)
    jsw.verify(token,JSW,(err,user)=>{
        if (err || !user){
            res.status(200).json({
                type :"Err",
                message : "No Authorized !"
            });
            return;
        }
        else{
            res.status(200).json({
                type :"Info",
                message : "Logged !",
                user
            });
        }
    });
}

module.exports= VerifyAuth;