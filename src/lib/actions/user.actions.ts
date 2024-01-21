"use server";

import User from "@/database/user.mode";
import { connectDb } from "../connectDb";

// User Types

type User = {};

export const createUser = async (user: User) => {
  try {
    await connectDb();

    const newUser = await User.create(user);

    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.log(error);
  }
};
