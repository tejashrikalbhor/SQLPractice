const Sequelize = require('sequelize');
const sequelize = new Sequelize('sql_practice','root','Admin@123',{
    host:"localhost",
    dialect: "mysql"
});
sequelize.authenticate()
.then(()=>{
console.log("Connected !");
})
.catch(err=>{
    console.log("Error"+err);
})