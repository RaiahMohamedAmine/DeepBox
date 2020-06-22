const connection = require('../../db');

async function GetMalades (req,res){
    connection.query('SELECT * FROM malade',(err,results)=>{
        if (err){
            res.status(500).json({
                type :"ERR",
                message: "Server not respondong !"
            });
            return;
        }
        res.status(200).json({
            type :"Info",
            message: "Getting Malades",
            malades : results
        });
    });
}

module.exports=GetMalades;