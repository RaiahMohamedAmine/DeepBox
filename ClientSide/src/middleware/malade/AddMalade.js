import axios from 'axios';
import config from '../config';
import {toastr} from 'react-redux-toastr'

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
            toastr.error('Erreur', "Une Erreur a survenu. Veuillez Réessayez")
        }
        else{
            toastr.success('Malade Ajouté', "Le malade "+data.prenom + ' ' + data.nom + ' a été ajouté avec Succés');
        }
    }).catch (err=>{
        toastr.error ('Erreur Fatale !', 'Assurez-vous que le serveur est bien en marche');
    });
}
