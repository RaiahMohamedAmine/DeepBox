const Admin = require('../handlers/adminHandlers/index');

module.exports =(app)=>{
    app.post('/admin/add',Admin.AddAdmin);
    app.post('/admin/login',Admin.Login);
    app.post('/admin/verifyAuth',Admin.VerifyAuth);
}