const Malade = require('../handlers/maladeHandlers/index');
const VerifyAuth = require('../handlers/adminHandlers/VerifyAuth');

module.exports =(app)=>{
    app.post('/malade/add',Malade.AddMalade);
    app.get('/malade/get',Malade.GetMalades);
    app.get('/malade/statistics',Malade.GetStatistics);
    app.get('/malade/get/:etat',Malade.GetMaladesEtat);
}