const Malade = require('../handlers/maladeHandlers/index');

module.exports =(app)=>{
    app.post('/malade/add',Malade.AddMalade);
    app.post('/malade/get',Malade.GetMalades);
    app.post('/malade/get/:etat',Malade.GetMaladesEtat);
}