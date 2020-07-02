import axios from 'axios';
import config from '../config';

export default (etat, token) => {
    return axios ({
        method: 'GET',
        url : config.URL+ ":" + config.PORT +'/malade/get/'+etat,
        headers : {
            authorization : 'Bearer '+ token
        }
    }).then (res=> {
        if (res.data.type ==='Err')
            alert( "Une Erreur a survenu. Veuillez Réessayez")
        else
            return res.data.malades;
    }).catch (err=>{
        alert('Assurez-vous que le serveur est bien en marche')
    });
}
