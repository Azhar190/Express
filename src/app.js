import express from "express";
import allRoutes from "./router/index.js";
import { connectDB } from "./db/config.js";
import dbInit from "./db/init.js";

const app = express();
connectDB();

dbInit()
  .then(() => console.log("Database Synced"))
  .catch((error) => console.log("Database not synced", error));

app.use(express.json());
app.use("/", allRoutes);

app.listen(3302, () => {
  console.log("Server is started http://localhost:3302");
});
