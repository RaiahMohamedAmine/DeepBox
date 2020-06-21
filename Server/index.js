const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.json({
        Message: "Deep Box Is Running"
    });
});


app.listen(5200, ()=> {
    console.log('Server started Running On Port 5200');
});