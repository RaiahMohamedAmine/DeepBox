import axios from 'axios';
import config from '../config';
import {toast} from 'react-toastify'

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
            toast.error('Une Erreur a survenu. Veuillez Réessayez !',config.TOAST_OPTIONS);
    }
    else{
        console.log(res.data)
        if (res.data.type==='ID-Err')
            toast.error(res.data.message,config.TOAST_OPTIONS);
        else
            toast.success("Le malade "+data.prenom + ' ' + data.nom + " a été ajouté avec Succés",config.TOAST_OPTIONS);
            setTimeout(()=>window.location.reload(true),5000);
    }
        
    }).catch (err=>{
        toast.error('Assurez-vous que le serveur est bien en marche',config.TOAST_OPTIONS);
    });
}