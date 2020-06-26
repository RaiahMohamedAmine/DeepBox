const jsw = require('jsonwebtoken');
const {JSW} = require('../../config');

async function CheckLogged (req,res,next){
    if (!req.headers.authorization)
    {
        res.status(400).json({
            type :"Err",
            message : "No Logged"
        });
        return;
    }
    const token = req.headers.authorization.split(' ')[1];
    jsw.verify(token,JSW,(err,user)=>{
        if (err || !user){
            res.status(200).json({
                type :"Err",
                message : "No Authorized !"
            });
            return;
        }
        else{
            next();
        }
    });
}

module.exports= CheckLogged;