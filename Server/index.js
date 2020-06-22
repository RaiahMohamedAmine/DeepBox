const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
require('./db');
require('./routes/maladeRoutes')(app);
require('./routes/adminRoutes')(app);

app.get('/',(req,res)=>{
    res.json({
        Message: "Deep Box Is Running"
    });
});


app.listen(5200, ()=> {
    console.log('Server started Running On Port 5200');
});