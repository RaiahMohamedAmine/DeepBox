import axios from 'axios';
import config from '../config';
import { toast } from 'react-toastify';

export default (etat, token) => {
    return axios ({
        method: 'GET',
        url : config.URL+ ":" + config.PORT +'/malade/get/'+etat,
        headers : {
            authorization : 'Bearer '+ token
        }
    }).then (res=> {
        if (res.data.type ==='Err')
        toast.error("Une Erreur a survenu. Veuillez Réessayez",config.TOAST_OPTIONS);
        else
            return res.data.malades;
    }).catch (err=>{
        toast.error('Assurez-vous que le serveur est bien en marche',config.TOAST_OPTIONS);
    });
}
