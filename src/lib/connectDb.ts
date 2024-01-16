import mongoose from "mongoose";

// function to connect mongodb
export const connectDb = async () => {
  try {
    if (mongoose.connections[0].readyState == 1) {
      return;
    } else {
      // connect the db
      await mongoose.connect(process.env.MONGODB_URI as string);

      console.log("Connected Successfully");
    }
  } catch (error) {
    console.log(error);
  }
};
