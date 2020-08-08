const express = require('express');
const app= express();
const bodyParser=require('body-parser');
const fileupload = require('express-fileupload');

const eventsRouter= require('./api/routes/events');
const customerRouter= require('./api/Routes/customer');
const bookingRouter=require('./api/Routes/booking');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization");

    if(req.method==='OPTIONS'){
        res.header("Access-Control-Allow-Methods", 'PUT, POST, PATCH, DELETE, GET');
        res.status(200).json({});
    }

    next();
});


app.use('/events',eventsRouter);
app.use('/customer',customerRouter);
app.use('/booking',bookingRouter);
app.use(fileupload({
    useTempFiles: true
  }));
  

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
