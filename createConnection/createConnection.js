const mysql = require('mysql2');
const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Admin@123"
});
con.connect(function(err){
    if(err){
        console.log("ErrorMessage:",err);
    }
    else{
        console.log("Connected Sucessfully.");
    }
    con.query("create database sql_Practice",(err,data)=>{
        if(err){
            console.log("ErrorMessage:",err);
        }
        else{
            console.log("DataBase Created Sucessfully.");
        }

    })

})
