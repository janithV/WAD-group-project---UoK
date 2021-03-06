const express = require('express');
const router= express.Router();
const conn= require('../../connection');

//adding a booking
router.post('/',(req,res,next)=>{ 
    const booking ={
        customerid: req.body.customerid,
        eventid: req.body.eventid,
        nooftickets: req.body.nooftickets
    }

    conn.query("INSERT INTO booking (customerid,eventid,nooftickets) VALUES ('"+booking.customerid+"','"+booking.eventid+"','"+booking.nooftickets+"')", (err,result)=>{
        if(!err){
            console.log(result.insertId);
            res.status(201).json({
                message: 'Booking added',
                bookingid: result.insertId
            });
        }
        else{
            console.log(err);
        }
    })
    
});

//retrieving bookings of a customer
router.get('/:custid',(req,res,next)=>{
    const id =req.params.custid;

    conn.query("SELECT event.name, event.date, event.venue, event.description, event.url, event.starttime, event.duration FROM event INNER JOIN booking on booking.eventid=event.eventid WHERE booking.customerid= ?",[id],
     (err,rows,fields)=>{
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