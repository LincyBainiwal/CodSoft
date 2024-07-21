import jwt from "jsonwebtoken";
import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    // Ensure the environment variable name matches your .env file
    const dbURI = process.env.MONGODB_URL;

    if (!dbURI) {
      throw new Error("MONGODB_URL environment variable not defined");
    }

    await mongoose.connect(dbURI)


    console.log("DB connection established");
  } catch (error) {
    console.error("DB Error: " + error);
  }
};

export const createJWT = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  // Change sameSite from strict to none when you deploy your app
  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict", //prevent CSRF attack
    maxAge: 1 * 24 * 60 * 60 * 1000, //1 day
  });
};
