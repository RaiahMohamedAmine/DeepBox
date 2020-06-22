const connection = require('../../db');
const crypto = require('crypto');
const {MDPHASH} = require('../../config');

async function addAdmin (req,res){
    if (!req.body)
    {
        res.status(400).json({
            type :"Err",
            message : "Bad Request"
        });
        return;
    }
   // req.body.pass =Buffer.from (crypto.pbkdf2Sync (req.body.pass,MDPHASH,10,100,'sha512')).toString()//.toString ();
    connection.query ('INSERT INTO admin SET ?',req.body,(err)=>{
        if (err)
            res.status(500).json({
                type:"Err",
                message :"Server not responding"
            });
        else{
            res.status(200).json({
                type :"Info",
                message :"Admin Added Added successfully !"
            });
        }
    });
}

module.exports = addAdmin;
