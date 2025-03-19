import {Router} from "express"
import {
    getAllProducts,
    createProduct,
    getProductById, 
    getProductsByCategory, 
    updateProduct, 
    deleteProduct} from "../controller/products.controller"

const route = Router()

route.get("/products", getAllProducts); 
route.post("/products", createProduct);
route.get("/products/:id", getProductById); 
route.get("/products/category/:category", getProductsByCategory); 
route.put("/products/:id", updateProduct); 
route.delete("/products/:id", deleteProduct); 

export default route