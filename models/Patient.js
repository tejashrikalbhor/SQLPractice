module.exports=(sequelize,DataTypes)=>{
    const Patient = sequelize.define('Patient' ,{
        Patient_ID:{
            type:DataTypes.INTEGER,
            autoIncrement :true,
            primaryKey:true,
            allowNull:false
        },
        Name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        Age:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        Address:{
            type:DataTypes.STRING,
            allowNull:false
        } ,
        Disease:{
            type:DataTypes.STRING,
            allowNull:false
        },
        Doctor_ID:{
            type:DataTypes.INTEGER,
            allowNull:false
        }
    },{
        timestamps:false
    });

}