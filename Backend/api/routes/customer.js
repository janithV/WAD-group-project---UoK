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

router.post('/signUp',(req,res,next)=>{ 
    const Customer ={
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        contactno: req.body.contactno,
        password: req.body.password,
        companyName: req.body.companyName,
        companyAddress: req.body.companyAddress,
        position: req.body.position
        
    }

    conn.query("INSERT INTO Customer (firstname,lastname,email,contactno,password,companyname,companyaddress,position)" +
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

router.get('/login/signIn', (req,res,next)=>{
    const email=req.body.email;
    const password=req.body.password;

    conn.query("SELECT * from Customer where email = ? AND password =? ",[email,password],(err,rows,fields)=>{
        if(!err){
           // var bool = false;
            if(rows){
                for(var i=0; i <rows.length; i++){
                    if(email === rows[i].email && password=== rows[i].password){
                        //bool=true;
                        res.status(200).send({
                            message: "Verified",
                            CustomerID : rows[i].customerid
                        });
                    }
                }
            
            }
            else{
                res.status(409).json({
                    message : "Error user not found"
                })
            }
        }
        else{
            res.status(500).json({
                message: err
            });
        }
       
    });


});

module.exports=router;