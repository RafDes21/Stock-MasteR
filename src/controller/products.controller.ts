import { Request, Response } from "express";
import {Product} from "../models/Products";


export const getAllProducts = async (req: Request, res: Response): Promise<any> => {
  try {
    const products = await Product.find();
    
    if (products.length === 0) {
      return res.status(200).json({
        status: 'success',
        message: 'No products found',
        data: []  
      });
    }

    return res.status(200).json({
      status: 'success',
      message: 'Products fetched successfully',
      data: products
    });

  } catch (error) {
    if (error === 'MongoError') {
      return res.status(500).json({
        status: 'error',
        message: 'Database error occurred while retrieving products',
        data: null
      });
    }

    return res.status(500).json({
      status: 'error',
      message: 'Error retrieving products',
      data: null
    });
  }
};


export const getProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await Product.findById(id);
    res.json(data);
  } catch (error) {
    res.status(404).json({ message: "product not exist" });
  }
};


export const getProductsByCategory = async (req: Request, res: Response) => {

    try {
      const { category } = req.params;
      const data = await Product.findById(category);
      res.json(data);
    } catch (error) {
      res.status(404).json({ message: "product not exist" });
    }
};


export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const newProduct = new Product(product);
    await newProduct.save();
    res.send(200);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "error to create a product" });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  
      try {
        const { id } = req.params;
        const {  name, category, description,unit, price, stock, expirationDate} = req.body;
        const updatedProduct = await Product.updateOne(
          { _id: id },
          { $set: {  name, category, description,unit, price, stock, expirationDate } }
        );
        res.status(200).json({ message: "Producto actualizado exitosamente", product: updatedProduct });

      } catch (error) {
        res.status(404).json({ message: "product not exist" });
      }
  };
  
  
  export const deleteProduct = async (req: Request, res: Response) => {
    const id: string = req.params.id;
  
     try {
        if (id) {
        await Product.deleteOne({ _id: id });
        res.status(200).json({message: "delete product!"});
         }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error occurred while deleting the product" });
      }
  };

