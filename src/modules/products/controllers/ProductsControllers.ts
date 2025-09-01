import { Request, Response } from "express";
import ListProductService from "../services/ListProductService";
import UpdateProductsService from "../services/upDateProductsService";
import CreateProductService from "../services/CreateProductService";
import ShowProductsService from "../services/ShowProductsService";
import DeleteProductService from "../services/DeleteProductService";

export default class ProductsControllers {
  async index(request: Request, response: Response): Promise<Response> {
    const listProductsService = new ListProductService();
    const products = await listProductsService.execute();
    return response.json(products);
  }

  async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const showProductsService = new ShowProductsService();
    const product = await showProductsService.execute({ id });
    return response.json(product);
  }

  async create(request: Request, response: Response): Promise<Response> {
    const { name, price, quantity } = request.body;
    const createProductService = new CreateProductService();
    const product = await createProductService.execute({
      name,
      price,
      quantity,
    });
    return response.status(201).json(product);
  }

  async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, price, quantity } = request.body;
    const updateProductsService = new UpdateProductsService();
    const product = await updateProductsService.execute({
      id,
      name,
      price,
      quantity,
    });
    return response.json(product);
  }

  async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteProductService = new DeleteProductService();
    await deleteProductService.execute({ id });
    return response.status(204).json([]);

  }
}

