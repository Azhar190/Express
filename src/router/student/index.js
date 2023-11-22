import { Router } from "express";
import StudentController from "../../controller/student/student.js";

const studentRouter = Router();

studentRouter.post("/", StudentController.create);
studentRouter.get("/", StudentController.getAll);
studentRouter.get("/:id", StudentController.getSingle);
studentRouter.delete("/:id", StudentController.delete);
studentRouter.put("/:id", StudentController.update);

export default studentRouter;
