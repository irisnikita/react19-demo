// Schemas
import { CreateProductData, Product } from "@/schemas";

// Api
import axiosInstance from "./api";

export interface CreateProductParams {
  data: CreateProductData;
}

export interface GetProductListParams {
  params?: Record<string, any>;
}

export const productServices = {
  getProductList: async ({ params }: GetProductListParams = {}) => {
    const response = await axiosInstance.get("/products", {
      params,
    });

    return response.data;
  },
  createProduct: async ({ data }: CreateProductParams): Promise<Product> => {
    const response = await axiosInstance.post("/products", data);

    return response.data;
  },
};
