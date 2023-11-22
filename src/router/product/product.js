import { Router } from "express";
import ProductController from "../../controller/product/product.js";

const productRouter = Router();

productRouter.post("/", ProductController.create);
productRouter.get("/", ProductController.getAll);
productRouter.get("/:id", ProductController.getSingle);
productRouter.delete("/:id", ProductController.delete);
productRouter.put("/:id", ProductController.update);

export default productRouter;
