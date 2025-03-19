import { Product } from "../models/Products";

export const getAllProducts = async () => {
  return await Product.find();
};

export const getProductById = async (id: string) => {
  return await Product.findById(id);
};

export const getProductsByCategory = async (category: string) => {
  return await Product.find({ category });
};

export const createProduct = async (productData: any) => {
  const newProduct = new Product(productData);
  return await newProduct.save();
};

export const updateProduct = async (id: string, updatedData: any) => {
  return await Product.updateOne({ _id: id }, { $set: updatedData });
};

export const deleteProduct = async (id: string) => {
  return await Product.deleteOne({ _id: id });
};
