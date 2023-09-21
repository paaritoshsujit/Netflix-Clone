import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://test:test123@cluster0.05xrkjq.mongodb.net/"
    );

    console.log("mongodb is connnected");
  } catch (error) {
    console.log(error);
  }
};

export default connectToDB;
