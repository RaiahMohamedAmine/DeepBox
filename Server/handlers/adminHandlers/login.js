const connection = require('../../db');
const jsw = require('jsonwebtoken');
const crypto = require('crypto');
const {MDPHASH,JSW} = require('../../config');

async function Login (req,res){
    if (!req.body.username || !req.body.pass)
    {
        res.status(400).json({
            type :"Err",
            message : "Bad Request"
        });
        return;
    }
    connection.query ('SELECT * FROM admin WHERE (username=\''+req.body.username+'\')',(err,results)=>{
        if (err){
            console.log(err)
            res.status(500).json({
                type:"Err",
                message :"Server not responding"
            });
        }
        else{
           // const bodyPass = crypto.pbkdf2Sync (req.body.pass,MDPHASH,10,100,'sha512').toString();
            if (req.body.pass== results[0].pass)
            {
                jsw.sign(req.body,JSW,{expiresIn:10}, (error,token)=>{
                    if (error)
                    {
                        console.log(error)
                        res.status(500).json({
                            type :"Err",
                            message :"An Error Occurred !",
                        });
                    }
                    else{
                        res.status(200).cookie('jwt',token).json({
                            type :"Info",
                            message :"Connection Succed !"
                        });
                    }
                });
            }
            else{
                res.status(500).json({
                    type :"Err",
                    message :"Wrong Credantials !",
                });
            }
            
        }
    });
}

module.exports = Login;
