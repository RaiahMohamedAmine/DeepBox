import axios from 'axios';
import config from '../config';
import {toastr} from 'react-redux-toastr'

export default (token) => {
    return axios ({
        method: 'GET',
        url : config.URL+ ":" + config.PORT +'/malade/get',
        headers : {
            authorization : 'Bearer '+ token
        }
    }).then (res=> {
        if (res.data.type ==='Err')
            toastr.error('Erreur', "Une Erreur a survenu. Veuillez Réessayez")
        else
            return res.data.malades;
    }).catch (err=>{
        toastr.error ('Erreur Fatale !', 'Assurez-vous que le serveur est bien en marche');
    });
}
