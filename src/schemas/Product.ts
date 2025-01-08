import { z } from "zod";

export const ProductSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number(),
  status: z.boolean(),
});

export type Product = z.infer<typeof ProductSchema>;
export type CreateProductData = Omit<Product, "id">;
