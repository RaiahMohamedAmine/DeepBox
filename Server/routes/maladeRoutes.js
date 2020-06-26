const Malade = require('../handlers/maladeHandlers/index');
const CheckLogged = require('../handlers/adminHandlers/CheckLogged');

module.exports =(app)=>{
    app.post('/malade/add',CheckLogged,Malade.AddMalade);
    app.get('/malade/get',CheckLogged,Malade.GetMalades);
    app.get('/malade/statistics',CheckLogged,Malade.GetStatistics);
    app.get('/malade/get/:etat',CheckLogged,Malade.GetMaladesEtat);
}