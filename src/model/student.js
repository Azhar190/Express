import { DataTypes } from "sequelize";
import Sequelize from "../db/config.js";

const studentModel = Sequelize.define("Student", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  Contact: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default studentModel;
