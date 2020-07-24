const express = require('express');
const app= express();

const eventsRouter= require('./api/routes/events');

app.use('/events',eventsRouter);


//error handling
app.use((req,res,next)=>{
    const error = new Error('Not Found');
    error.status=404;
    next(error);
});

app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message :error.message
        }
    })
});

module.exports=app;
