import axios from 'axios';
import config from '../config';

export default (data, token) => {
    return axios ({
        method: 'POST',
        url : config.URL+ ":" + config.PORT +'/malade/add',
        data,
        headers : {
            authorization : 'Bearer '+ token
        }
    }).then (res=> {
        if (res.data.type ==='Err'){
            alert('Une Erreur a survenu. Veuillez Réessayez"');
    }
    else{
        console.log(res.data)
        if (res.data.type==='ID-Err')
            alert(res.data.message);
        else
            alert("Le malade "+data.prenom + ' ' + data.nom + " a été ajouté avec Succés")
    }
        
    }).catch (err=>{
        alert('Assurez-vous que le serveur est bien en marche');
    });
}