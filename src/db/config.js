import { Sequelize } from "sequelize";

const sequelize = new Sequelize("crud", "postgres", "azhar786", {
  host: "localhost",
  port: 5432,
  dialect: "postgres",
});

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established");
  } catch (error) {
    console.log("Unable to connect");
  }
};

export default sequelize;
