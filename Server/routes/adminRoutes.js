const Admin = require('../handlers/adminHandlers/index');

module.exports =(app)=>{
    app.post('/admin/add',Admin.AddAdmin);
    app.post('/admin/login',Admin.Login);
   // app.post('/admin/verifytoken',Admin.Verifytoken);
    app.post('/admin/logout',Admin.Logout);
}