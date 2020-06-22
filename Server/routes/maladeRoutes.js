const Malade = require('../handlers/maladeHandlers/index');
const VerifyToken = require('../handlers/adminHandlers/Verifytoken');

module.exports =(app)=>{
    app.post('/malade/add',VerifyToken,Malade.AddMalade);
    app.post('/malade/get',VerifyToken,Malade.GetMalades);
    app.post('/malade/get/:etat',VerifyToken,Malade.GetMaladesEtat);
}