const connection = require('../../db');

async function GetStatistics (req,res){
    const Stats ={
        Sexe :{
            Homme :0,
            Femme:0
        },
        Age :[
            {
                label :'0 à 10' ,
                value: 0
            } ,
            {
                label :'11 à 20' ,
                value: 0
            } ,
            {
                label :'21 à 30' ,
                value: 0
            } ,
            {
                label :'31 à 40' ,
                value: 0
            } ,
            {
                label :'41 à 50' ,
                value: 0
            } ,
            {
                label :'51 à 60' ,
                value: 0
            } ,
            {
                label :'61 à 70' ,
                value: 0
            } ,
            {
                label :'71 à 80' ,
                value: 0
            } 
        ]
    }
    connection.query('SELECT * FROM malade',(err,results)=>{
        if (err){
            res.status(500).json({
                type :"ERR",
                message: "Server not respondong !"
            });
            return;
        }
        if(results){
            results.forEach(malade => {
                Stats.Sexe[malade.sexe]++;
                const age =calculateAge (malade.dateNaissance);
                const indice = age/10 >>0; 
                Stats.Age[indice].value++;
            });
            res.status(200).json({
                type :"Info",
                message: "Getting Statistics",
                Stats
            });
        }
        else{
            res.status(200).json({
                type :"Err",
                message: "No Malade Found"
            });
        }
    });
}


const calculateAge = (dateBirth) => {
    if (!(dateBirth == null)) {
        const year = Number(dateBirth.substring(0, 4));
        const month = Number(dateBirth.substring(5, 7) - 1);
        const day = Number(dateBirth.substring(8, 10));
        var today = new Date();
        var age = today.getFullYear() - year;

        if (today.getMonth() < month || (today.getMonth() === month && today.getDate() < day))
            age--;
        return age-1;
    }
};

module.exports=GetStatistics;