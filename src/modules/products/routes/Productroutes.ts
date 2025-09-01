import { Router } from "express";
import ProductsControllers from "../controllers/ProductsControllers";
import { createProductSchema, idParamsValidation, idProductValidation, updateProductSchema } from "../schemas/ProductSchemas";

export const productsRouter = Router();
const productsControllers = new ProductsControllers();

productsRouter.get("/", productsControllers.index);
productsRouter.get("/:id",idProductValidation, productsControllers.show);
productsRouter.post("/", createProductSchema, productsControllers.create);
productsRouter.put("/:id", updateProductSchema, productsControllers.update);
productsRouter.delete("/:id", idParamsValidation, productsControllers.delete);
