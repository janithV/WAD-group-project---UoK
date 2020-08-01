const conn = require('../../connection');
const express = require('express');
const router=express.Router();


router.get('/',(req,res,next)=>{

    conn.query("SELECT * from Customer",(err,rows,fields)=>{
        if(!err){
            console.log(rows);
            res.status(200).send(rows);
        }
        else{
            console.log(err);
        }
    });
});

router.get('/:custID',(req,res,next)=>{
    const id= req.params.custID;
    conn.query("SELECT * from Customer where customerid = ?",[id],(err,rows,fields)=>{
        if(!err){
            console.log(rows);
            res.status(200).send(rows);
        }
        else{
            console.log(err);
        }
    });
});

