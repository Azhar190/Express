import { Router } from "express";
import studentRouter from "./student/index.js";
import TeacherRouter from "./teacher/teacher.js";
import productRouter from "./product/product.js";

const allRoutes = Router();

allRoutes.use("/", studentRouter);
allRoutes.use("/", TeacherRouter);
allRoutes.use("/", productRouter);

export default allRoutes;
