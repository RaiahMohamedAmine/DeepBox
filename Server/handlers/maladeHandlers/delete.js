const connection = require('../../db');

async function DeleteMalade (req,res){
    if (!req.body)
    {
        res.status(400).json({
            type :"Err",
            message : "Bad Request"
        });
        return;
    }
    connection.query ('DELETE FROM malade WHERE malade.tel =\''+ req.body.tel +'\'', (err) => {
        if (err) {
            res.status(200).json({
                type:"Err",
                message :"Server not responding"
            });
        } else{
            console.log('deleted')
            res.status(200).json({
                type :"Info",
                message :"Malade Deleted successfully !"
            });
        }
    });
}

module.exports = DeleteMalade;
