import axios from 'axios';
import config from '../config';

export default (token) => {
    return axios ({
        method: 'GET',
        url : config.URL+ ":" + config.PORT +'/malade/statistics',
        headers : {
            authorization : 'Bearer '+ token
        }
    }).then (res=> {
        if (res.data.type ==='Err')
            alert("Une Erreur a survenu. Veuillez Réessayez")
        else
            return res.data.Stats;
    }).catch (err=>{
        alert( 'Assurez-vous que le serveur est bien en marche')
    });
}
