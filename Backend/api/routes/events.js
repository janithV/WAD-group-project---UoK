const conn= require('../../connection')
const express = require('express');
const router=express.Router();

//localhost:3000/events
router.get('/',(req,res,next)=>{
    conn.query("SELECT * from event", (err,rows,fields)=>{
        if(!err){
            console.log(rows);
            res.status(200).send(rows);
        }
        else{
            console.log(err);
        }
    })
});
//localhost:3000/events/(eventId)
router.get('/:eventId',(req,res,next)=>{
    const id =req.params.eventId;

    conn.query("SELECT * from event where eventid =?",[id], (err,rows,fields)=>{
        if(!err){
            console.log(rows);
            res.status(200).send(rows);
        }
        else{
            console.log(err);
        }
    })

});

//localhost:3000/events/addEvent
router.post('/addEvent',(req,res,next)=>{ 
    const event ={
        name: req.body.name,
        date: req.body.date,
        venue: req.body.venue,
        description: req.body.description,
        startTime: req.body.startTime,
        duration: req.body.duration,
        customerId: req.body.customerId
        
    }

    conn.query("INSERT INTO event (name,date,venue,description,starttime,duration) VALUES ('"+event.name+"','"+event.date+"','"+event.venue+"','"+event.description+"','"+event.startTime+"','"+event.duration+"')", (err,result)=>{
        if(!err){
            console.log(result.insertId);
            res.status(201).json({
                message: 'Event added',
                id: result.insertId
            });
        }
        else{
            console.log(err);
        }
    })
    
});

//localhost:3000/events/deleteEvent/(eventId)
router.post('/deleteEvent/:eventId',(req,res,next)=>{
    const id =req.params.eventId;

    conn.query("DELETE FROM event WHERE eventid =?",[id], (err,result)=>{
        if(!err){
            console.log(result.affectedRows);
            res.status(201).json({
                message: 'Event deleted',
                id :id
            });
        }
        else{
            console.log(err);
        }
    })
    
});

//localhost:3000/events/myEvents/(custId) //retrieving the hosted events
router.get('/myHostedEvents/:custId',(req,res,next)=>{
    const id =req.params.custId; 

    conn.query("SELECT * FROM event WHERE customerid =?",[id], (err,rows,fields)=>{
        if(!err){
            console.log(rows);
            res.status(200).send(rows);
        }
        else{
            console.log(err);
        }
    })
    
});

module.exports=router;