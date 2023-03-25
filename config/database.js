import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(process.env.MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB Connected...");
    })
    .catch((error) => {
      console.error(`Error: ${error.message}`);
    });
};

export default connectDB;
