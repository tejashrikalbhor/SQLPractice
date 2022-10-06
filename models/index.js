const {Sequelize,DataTypes} = require('sequelize');
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
const db ={};
db.Sequelize =Sequelize;
db.sequelize = sequelize;
db.users = require('./Patient')(sequelize,DataTypes);
db.sequelize.sync()
.then(()=>{
    console.log("Yes RE-Sync");
})