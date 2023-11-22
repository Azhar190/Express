import { DataTypes } from "sequelize";
import Sequelize from "../db/config.js";

const productModel = Sequelize.define("product", {
  Watch: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Clothes: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Books: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  Items: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default productModel;
