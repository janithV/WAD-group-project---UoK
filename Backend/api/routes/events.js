const conn= require('../../connection')
const express = require('express');
const router=express.Router();
const cloudinary = require("cloudinary").v2;
const multer=require('multer');

//multer configuration
const storage= multer.diskStorage({
    destination : function(req,file,cb){
        cb(null,'./uploads/');
    },
    filename: function(req,file,cb){
        cb(null, file.originalname)
    }
});

const fileFilter= (req,file,cb)=>{
    if(file.mimetype==='image/jpeg' || file.mimetype ==='image/png'){
        cb(null,true);
    }
    else{
        cb(null,false);
    }
}

const upload=multer({
    storage : storage,
    limits :{
        fieldSize: 1024*1024*5
    },
    fileFilter: fileFilter
});

//cloudinary configuration
cloudinary.config({
    cloud_name: "fashionistaimage",
    api_key: "822148795585776",
    api_secret: "1FbjgHZVhCiU_XRO-rHY7SNE4v0"
  
  });


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
        url:req.body.img,
        startTime: req.body.startTime,
        duration: req.body.duration,
        customerId: req.body.customerId,
       
        
    }

    conn.query("INSERT INTO event (name,date,venue,description,url,starttime,duration) VALUES ('"+event.name+"','"+event.date+"','"+event.venue+"','"+event.description+"','"+event.url+"','"+event.startTime+"','"+event.duration+"')", (err,result)=>{
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


router.post('/upload', upload.single('img'), (req, res,next) => {

    console.log("Came here");


    if (req.file === null) {
      return res.status(200).json({ msg: "No file is Selected to upload. Please select a file first!" })
    }
    const file = req.file;
    console.log("uplod file is:", file);
  
  
    cloudinary.uploader.upload(file.path, function (err, result) {
  
      if (err) {
  
        console.log("Error is :", err);
  
        return res.status(400).json({ msg: "Server Error not Uploaded" })
  
      } else {
        console.log("Result is :", res);
  
  
        console.log("response URL: ", result.url);
       return res.status(200).json({ URL: result.url })
  
      }
  
  
    });
  
  
  
  })

module.exports=router;