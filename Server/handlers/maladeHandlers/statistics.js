const connection = require('../../db');

async function GetStatistics (req,res){
    const Stats ={
        Sexe :{
            Homme :0,
            Femme:0
        },
        Age :{
            '0 à 10':0,
            '11 à 20':0,
            '21 à 30':0,
            '31 à 40':0,
            '41 à 50':0,
            '51 à 60':0,
            '61 à 70':0,
            '71 à 80':0,
            '81 à 90':0,
        }
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
            resluts.forEach(malade => {
                Stats.Sexe[malade.sexe]++;
                const age =calculateAge (malade.dateNaissance);
                const indice = age/10 >>0; 
                switch (indice){
                    case 0 : {
                        Stats.Age['0 à 10']++;
                        break;
                    }  
                    case 1 : {
                        Stats.Age['11 à 20']++;
                        break;
                    } 
                    case 2 : {
                        Stats.Age['21 à 30']++;
                        break;
                    }  
                    case 3 : {
                        Stats.Age['31 à 40']++;
                        break;
                    }  
                    case 4: {
                        Stats.Age['41 à 50']++;
                        break;
                    }  
                    case 5 : {
                        Stats.Age['51 à 60']++;
                        break;
                    }  
                    case 6 : {
                        Stats.Age['61 à 70']++;
                        break;
                    }  
                    case 7 : {
                        Stats.Age['71 à 80']++;
                        break;
                    }  
                    case 0 : {
                        Stats.Age['81 à 90']++;
                        break;
                    }  
                }
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