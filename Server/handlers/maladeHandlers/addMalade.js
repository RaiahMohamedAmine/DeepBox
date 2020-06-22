const connection = require('../../db');

async function addMalade (req,res){
    if (!req.body)
    {
        res.status(400).json({
            type :"Err",
            message : "Bad Request"
        });
        return;
    }
    connection.query ('INSERT INTO malade SET ?',req.body,(err)=>{
        if (err)
            res.status(500).json({
                type:"Err",
                message :"Server not responding"
            });
        else{
            res.status(200).json({
                type :"Info",
                message :"Malade Added successfully !"
            });
        }
    });
}

module.exports = addMalade;
