const express = require('express');
const mailer = require('nodemailer');
const router= express.Router();

var transporter = mailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ibackentertainment69@gmail.com',
      pass: 'ibackent123'
    }
  });

  router.post('/',(req,res,next)=>{
    var emailadd= req.body.emailadd;

    var mailOptions = {
        from: 'ibackentertainment69@gmail.com',
        to: emailadd,
        subject: 'Subscription to Newsletter',
        text: 'hey there! \n Welcome to IBACK Entertainment. '
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          res.status(201).json({
              message : 'Subscribed Successfully!'
          });
        }
      });
  });
