const Malade = require('../handlers/maladeHandlers/index');
const VerifyToken = require('../handlers/adminHandlers/Verifytoken');

module.exports =(app)=>{
    app.post('/malade/add',Malade.AddMalade);
    app.post('/malade/get',Malade.GetMalades);
    app.post('/malade/get/:etat',Malade.GetMaladesEtat);
}