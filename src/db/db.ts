import mongoose from "mongoose";
import config from "../config";

const connectDB = () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(config.mongoURI);
    console.log("connect mongo");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;