import { Router } from "express";
import TeacherController from "../../controller/teacher/teacher.js";

const teacherRouter = Router();

teacherRouter.post("/teacher", TeacherController.create);
teacherRouter.get("/teacher", TeacherController.getAll);
teacherRouter.get("/:id", TeacherController.getSingle);
teacherRouter.delete("/:id", TeacherController.delete);
teacherRouter.put("/:id", TeacherController.update);

export default teacherRouter;
