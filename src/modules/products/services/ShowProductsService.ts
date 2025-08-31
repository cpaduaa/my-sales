import AppError from "@shared/errors/AppError";
import { productsRepositories } from "../database/repositories/ProductsRepositories";
import { Product } from "../database/entities/products";

interface IsShowProducts {
  id: string;
}

export default class ShowProductsService {
  async execute({ id }: IsShowProducts): Promise<Product> {
    const product = await productsRepositories.findById(id);

    if (!product) {
      throw new AppError('Product not found.', 404);
    }

    return product;
  }
}
