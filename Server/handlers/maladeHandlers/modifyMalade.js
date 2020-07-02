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
    connection.query ("UPDATE malade SET tel ='" + req.body.tel +"', "
    + "adresse = '" + req.body.adresse  +"', "
    + "siege = '" + req.body.siege  +"', "
    + "etat = '" + req.body.etat + "' WHERE id = '"+ req.body.id +"'" , (err) => {
        if (err) {
            console.log(err);
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
