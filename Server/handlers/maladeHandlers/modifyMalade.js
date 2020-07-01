const connection = require('../../db');

async function ModifyMalade (req,res){
    if (!req.body)
    {
        res.status(400).json({
            type :"Err",
            message : "Bad Request"
        });
        return;
    }
    connection.query ('UPDATE malade SET ?',req.body, (err) => {
        if (err) {
            res.status(200).json({
                type:"Err",
                message :"Server not responding"
            });
        } else{
            console.log('Modified')
            res.status(200).json({
                type :"Info",
                message :"Malade Modified successfully !"
            });
        }
    });
}

module.exports = ModifyMalade;
