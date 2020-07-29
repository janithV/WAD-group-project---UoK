const conn= require('../../connection')
const express = require('express');
const router=express.Router();

//getting all events
router.get('/',(req,res,next)=>{
    conn.query("SELECT * from event", (err,rows,fields)=>{
        if(!err){
            console.log(rows);
        }
        else{
            console.log(err);
        }
    })

    res.status(200).json({
        message: 'handling GET to /events'
    });
});

router.get('/:eventId',(req,res,next)=>{
    const id =req.params.eventId;

    conn.query("SELECT * from event where eventid =?",[id], (err,rows,fields)=>{
        if(!err){
            console.log(rows);
        }
        else{
            console.log(err);
        }
    })
    res.status(200).json({
        message: 'you clicked on this event',
        id :id
    });
});

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
        }
        else{
            console.log(err);
        }
    })
    res.status(200).json({
        message: 'you clicked on add event'
    });
});

router.post('/deleteEvent/:eventId',(req,res,next)=>{
    const id =req.params.eventId;

    conn.query("DELETE FROM event WHERE eventid =?",[id], (err,result)=>{
        if(!err){
            console.log(result.affectedRows);
        }
        else{
            console.log(err);
        }
    })
    res.status(200).json({
        message: 'you clicked on this event',
        id :id
    });
});

router.post('/myEvents/:custId',(req,res,next)=>{
    const id =req.params.custId;

    conn.query("SELECT * FROM event WHERE customerid =?",[id], (err,rows,fields)=>{
        if(!err){
            console.log(rows);
        }
        else{
            console.log(err);
        }
    })
    res.status(200).json({
        message: 'you clicked on this event',
        id :id
    });
});

module.exports=router;