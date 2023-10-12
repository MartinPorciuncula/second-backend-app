import { DataTypes } from "sequelize";
import sequelize from "../config/database/database.js"

const Plane = sequelize.define("plane", {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false,
        field:"plane_id"
    },
    number:{
        type:DataTypes.INTEGER,
        allowNull:false,
        field:"plane_number",
    },
    model:{
        type: DataTypes.STRING(20),
        allowNull:false,
    },
    capacity:{
        type:DataTypes.INTEGER,
        allowNull:false,
        field:"max_capacity"
    },
    airline:{
        type:DataTypes.ENUM("flybondi", "jetSMART Airlines", "LATAM airlines", "GOL transportes aereos"),
        allowNull:false,
    },
})

export default Plane