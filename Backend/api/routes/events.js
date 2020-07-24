const express = require('express');
const router=express.Router();

//getting all events
router.get('/',(req,res,next)=>{
    res.status(200).json({
        message: 'handling GET to /events'
    });
});

router.get('/:eventId',(req,res,next)=>{
    const id =req.params.eventId;
    res.status(200).json({
        message: 'you clicked on this event',
        id :id
    });
});

module.exports=router;