import mongoose from "mongoose";

const mongodbUri = process.env.MONGODB_URI;

let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectDb = async () => {
  if (cached.conn) return cached.conn;

  if (!mongodbUri) throw new Error("Connection String is Missing");

  cached.promise =
    cached.promise ||
    mongoose.connect(mongodbUri, {
      dbName: "ticks",
      bufferCommands: false,
    });

  cached.conn = await cached.promise;

  return cached.conn;
};
