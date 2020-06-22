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
    console.log(req.body)
    connection.query ('INSERT INTO malade SET ?', req.body.patient, (err) => {
        if (err) {
            console.log(err)
            res.status(500).json({
                type:"Err",
                message :"Server not responding"
            });
        } else{
            res.status(200).json({
                type :"Info",
                message :"Malade Added successfully !"
            });
        }
    });
}

module.exports = addMalade;
