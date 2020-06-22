const Malade = require('../handlers/maladeHandlers/index');
const VerifyToken = require('../handlers/adminHandlers/Verifytoken');

module.exports =(app)=>{
    app.post('/malade/add',Malade.AddMalade);
    app.get('/malade/get',Malade.GetMalades);
    app.get('/malade/get/:etat',Malade.GetMaladesEtat);
}