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

router.post('/addCustomer',(req,res,next)=>{ 
    const Customer ={
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.date,
        contactno: req.body.venue,
        password: req.body.description,
        companyName: req.body.startTime,
        companyAddress: req.body.duration,
        position: req.body.customerId
        
    }

    conn.query("INSERT INTO Customer (firstname,lastname,venue,email,contactno,password,companyname,companyaddress,position)" +
    "VALUES ('"+Customer.fname+"','"+Customer.lname+"','"+Customer.email+"','"+Customer.contactno+"','"+Customer.password+"','"+Customer.companyName+"','"+Customer.companyAddress+"','"+Customer.position+"')", (err,result)=>{
        if(!err){
            console.log(result.insertId);
            res.status(201).json({
                message: 'Customer added',
                id: result.insertId
            });
        }
        else{
            console.log(err);
        }
    })
    
});

module.exports=router;