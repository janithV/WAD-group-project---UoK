const sql = require('mysql');

var mysqlConnection = sql.createConnection({
    host:"sql12.freemysqlhosting.net",
    user:"sql12356437",
    password:"QEkAvv2d45",
    database:"sql12356437",
    multipleStatements: true
});

mysqlConnection.connect((err)=>{
    if(!err){
        console.log("connection Successful");
    }
    else{
        console.log(err);
    }
});

module.exports=mysqlConnection;