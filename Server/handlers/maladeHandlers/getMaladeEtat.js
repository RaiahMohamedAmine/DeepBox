const connection = require('../../db');

async function GetMalades (req,res){
    if (!req.params.etat)
    {
        res.status(400).json({
            type :"Err",
            message : "Bad Request"
        });
        return;
    }
    connection.query('SELECT * FROM malade WHERE (etat=\''+req.params.etat+'\')',(err,results)=>{
        if (err){
            console.log(err)
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