import { Request, Response } from "express";
import * as productService from "../services/productServices";
import products from "models/Products";


export const getAllProducts = async (req: Request, res: Response) => {
    try {
        const products = await productService.getAllProducts();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los productos", error });
    }
};


export const getProductsByCategory = async (req: Request, res: Response) => {
    try {
        const { category } = req.params;
        const products = await productService.getProductsByCategory(category);
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los productos por categoría", error });
    }
};


export const createProduct = async (req: Request, res: Response) => {
    try {
        const { name, category, description, price, stock, expirationDate } = req.body;

        const newProduct = new products({
            name,
            category,
            description,
            price,
            stock,
            expirationDate,
            createdAt: new Date(),
        });

        const createdProduct = await newProduct.save();

        res.status(201).json(createdProduct);
    } catch (error) {
        res.status(500).json({ message: "Error al crear el producto", error });
    }
};

export const updateProduct = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { name, category, description, price, stock, expirationDate } = req.body;
  
      // Actualizar el producto
      const updatedProduct = await productService.updateProduct(id, {
        name,
        category,
        description,
        price,
        stock,
        expirationDate,
      });
  
      if (!updatedProduct) {
        return res.status(404).json({ message: "Producto no encontrado" });
      }
  
      res.json(updatedProduct);
    } catch (error) {
      res.status(500).json({ message: "Error al actualizar el producto", error });
    }
  };
  
  // Eliminar un producto
  export const deleteProduct = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
  
      // Eliminar el producto
      const deletedProduct = await productService.deleteProduct(id);
  
      if (!deletedProduct) {
        return res.status(404).json({ message: "Producto no encontrado" });
      }
  
      res.json({ message: "Producto eliminado", product: deletedProduct });
    } catch (error) {
      res.status(500).json({ message: "Error al eliminar el producto", error });
    }
  };

// import { Request, Response } from "express";
// import Product from "../models/Product";

/**
 * Obtener todos los productos
 * Este método obtiene todos los productos almacenados en la base de datos.
 */
// export const getAllProducts = async (req: Request, res: Response) => {
//     try {
//         // Busca todos los productos en la base de datos usando el método find() de Mongoose
//         const products = await Product.find();
//         // Devuelve la lista de productos como respuesta en formato JSON
//         res.json(products);
//     } catch (error) {
//         // En caso de error, devuelve un mensaje con el error
//         res.status(500).json({ message: "Error al obtener los productos", error });
//     }
// };

/**
 * Obtener productos por categoría
 * Este método obtiene los productos filtrados por la categoría especificada en los parámetros de la solicitud.
 */
// export const getProductsByCategory = async (req: Request, res: Response) => {
//     try {
//         // Extrae la categoría de los parámetros de la solicitud
//         const { category } = req.params;
//         // Busca los productos que coinciden con la categoría en la base de datos
//         const products = await Product.find({ category });

//         // Si no hay productos para esa categoría, devuelve un mensaje de error
//         if (products.length === 0) {
//             return res.status(404).json({ message: "No hay productos en esta categoría" });
//         }

        // Devuelve los productos filtrados por categoría
//         res.json(products);
//     } catch (error) {
//         // En caso de error, devuelve un mensaje con el error
//         res.status(500).json({ message: "Error al obtener los productos por categoría", error });
//     }
// };

/**
 * Crear un nuevo producto
 * Este método recibe la información del producto en el cuerpo de la solicitud y lo guarda en la base de datos.
 */
// export const createProduct = async (req: Request, res: Response) => {
//     try {
//         // Extrae los datos del nuevo producto desde el cuerpo de la solicitud
//         const { name, category, description, quantity, date } = req.body;

//         // Crea un nuevo documento de producto usando los datos proporcionados
//         const newProduct = new Product({ name, category, description, quantity, date });
//         // Guarda el producto en la base de datos
//         await newProduct.save();

//         // Devuelve el producto recién creado como respuesta
//         res.status(201).json(newProduct);
//     } catch (error) {
//         // En caso de error, devuelve un mensaje con el error
//         res.status(500).json({ message: "Error al crear el producto", error });
//     }
// };

/**
 * Actualizar un producto por ID
 * Este método permite actualizar los detalles de un producto específico usando su ID.
 */
// export const updateProduct = async (req: Request, res: Response) => {
//     try {
//         // Extrae el ID del producto desde los parámetros de la solicitud
//         const { id } = req.params;
//         // Actualiza el producto en la base de datos usando el ID y los datos del cuerpo de la solicitud
//         const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });

//         // Si no se encuentra el producto, devuelve un mensaje de error
//         if (!updatedProduct) {
//             return res.status(404).json({ message: "Producto no encontrado" });
//         }

        // Devuelve el producto actualizado como respuesta
//         res.json(updatedProduct);
//     } catch (error) {
//         // En caso de error, devuelve un mensaje con el error
//         res.status(500).json({ message: "Error al actualizar el producto", error });
//     }
// };

/**
 * Eliminar un producto por ID
 * Este método permite eliminar un producto de la base de datos usando su ID.
 */
// export const deleteProduct = async (req: Request, res: Response) => {
//     try {
//         // Extrae el ID del producto desde los parámetros de la solicitud
//         const { id } = req.params;
//         // Elimina el producto de la base de datos usando el ID
//         const deletedProduct = await Product.findByIdAndDelete(id);

//         // Si no se encuentra el producto, devuelve un mensaje de error
//         if (!deletedProduct) {
//             return res.status(404).json({ message: "Producto no encontrado" });
//         }

        // Devuelve un mensaje de éxito después de eliminar el producto
//         res.json({ message: "Producto eliminado correctamente" });
//     } catch (error) {
//         // En caso de error, devuelve un mensaje con el error
//         res.status(500).json({ message: "Error al eliminar el producto", error });
//     }
// };
