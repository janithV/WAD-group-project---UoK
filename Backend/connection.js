const sql = require('mysql');

var mysqlConnection = sql.createConnection({
    host:"db4free.net",
    user:"ibackent",
    password:"ibackent123",
    database:"ibackentertain",
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