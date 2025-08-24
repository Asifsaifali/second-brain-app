import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbConnect = async (): Promise<typeof mongoose> => {
  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri) {
    throw new Error("MONGO_URI is not defined in environment variables");
  }

  try {
    const conn = await mongoose.connect(mongoUri);
    console.log("Database connected successfully");
    return conn;
  } catch (error) {
    console.error("Something went wrong in DB connection:", error);
    throw error;
  }
};

export default dbConnect;
