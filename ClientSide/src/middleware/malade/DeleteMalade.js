import axios from 'axios';
import config from '../config';

export default (data, token) => {
    return axios ({
        method: 'POST',
        url : config.URL+ ":" + config.PORT +'/malade/delete',
        data,
        headers : {
            authorization : 'Bearer '+ token
        }
    }).then (res=> {
        if (res.data.type ==='Err'){
            alert('Une Erreur a survenu. Veuillez Réessayez');
    }
        else{
            alert("Le malade "+data.prenom + ' ' + data.nom + " a été supprimé avec Succés")
            window.location.reload(true);
        }
    }).catch (err=>{
        alert('Assurez-vous que le serveur est bien en marche');
    });
}