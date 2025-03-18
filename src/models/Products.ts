import mongoose, { Schema, Document } from "mongoose";

export interface IProduct extends Document {
  name: string;
  price?: number;
  description?: string;
  stock: number;
  category: string;
  expirationDate?: String; 
  createdAt: Date;
}

const ProductSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  price: { type: Number },
  description: { type: String },
  stock: { type: Number, required: true, default: 0 },
  category: { type: String, required: true },
  expirationDate: { type: String }, 
  createdAt: { type: Date, default: Date.now },
});


export default mongoose.model<IProduct>("Product", ProductSchema);
