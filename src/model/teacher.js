import { DataTypes } from "sequelize";
import Sequelize from "../db/config.js";

const teacherModel = Sequelize.define("teacher", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  designation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  university: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default teacherModel;
