import Product, { IProduct } from "../models/Products";

export const getAllProducts = async (): Promise<IProduct[]> => {
  return Product.find();
};

export const getProductsByCategory = async (category: string): Promise<IProduct[]> => {
  return Product.find({ category });
};

export const createProduct = async (productData: IProduct): Promise<IProduct> => {
  const product = new Product(productData);
  return product.save();
};

export const updateProduct = async (id: string, productData: Partial<IProduct>): Promise<IProduct | null> => {
  return Product.findByIdAndUpdate(id, productData, { new: true }); // Devuelve el producto actualizado o null si no se encuentra
};

// Eliminar un producto
export const deleteProduct = async (id: string): Promise<IProduct | null> => {
  return Product.findByIdAndDelete(id); // Elimina el producto y lo devuelve, o null si no se encuentra
};