import {Router} from "express"
import {getAllProducts, getProductsByCategory, updateProduct, deleteProduct} from "../controller/products.controller"

const route = Router()

route.get("/products", getAllProducts); 
route.get("/products/category/:category", getProductsByCategory); 
route.put("/products/:id", updateProduct); 
route.delete("/products/:id", deleteProduct); 

export default route