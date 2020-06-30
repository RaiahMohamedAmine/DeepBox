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
    connection.query ('DELETE FROM malade Where nom = '+ req.body.nom 
    +' prenom = '+ req.body.prenom 
    + 'adresse= ' + req.body.adresse
    + 'siege= ' + req.body.siege
    + 'dateAjout= ' + req.body.dateAjout
    + 'sexe= ' + req.body.sexe
    + 'etat= ' + req.body.etat
    + 'tel= ' + req.body.tel, (err) => {
        if (err) {
            console.log(err)
            res.status(200).json({
                type:"Err",
                message :"Server not responding"
            });
        } else{
            res.status(200).json({
                type :"Info",
                message :"Malade Deleted successfully !"
            });
        }
    });
}

module.exports = DeleteMalade;
