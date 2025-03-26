import mongoose, { Schema, Document } from "mongoose";


const ProductSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number },
  description: { type: String },
  unit:{type:String},
  url:{type:String},
  stock: { type: Number, required: true, default: 0.0 },
  category: { type: String, required: true },
  expirationDate: { type: String }, 
  createdAt: { type: Date, default: () => new Date().toISOString() },
});


export const Product = mongoose.model("Product", ProductSchema);
