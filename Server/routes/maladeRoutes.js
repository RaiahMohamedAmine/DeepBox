const Malade = require('../handlers/maladeHandlers/index');
const CheckLogged = require('../handlers/adminHandlers/CheckLogged');

module.exports =(app)=>{
    app.post('/malade/add',CheckLogged,Malade.AddMalade);
    app.get('/malade/get',CheckLogged,Malade.GetMalades);
    app.post('/malade/delete',CheckLogged,Malade.Delete);
    app.post('/malade/modify',CheckLogged,Malade.ModifyMalade);
    app.get('/malade/statistics',CheckLogged,Malade.GetStatistics);
    app.get('/malade/get/:etat',CheckLogged,Malade.GetMaladesEtat);
}