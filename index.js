import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import connectDB from "./config/database.js";
import { authRoutes, navbarRoutes , experiencesRoutes, servicesRoutes, techRoutes } from "./routes/index.js";
import cloudinaryConfig from "./config/cloudinary.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb", extended: true }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

const port = process.env.PORT || 5000;

app.use("/api/auth", authRoutes);
app.use("/api/navbar", navbarRoutes);
app.use("/api/experiences", experiencesRoutes);
app.use("/api/services", servicesRoutes);
app.use("/api/tech", techRoutes);

app.get("/", (req, res) => {
  res.json({ msg: "Welcome to the ContactKeeper API..." });
});

const startServer = async () => {
  try {
    connectDB();
    cloudinaryConfig();
    app.listen(port, () =>
      console.log(`Server started on port http://localhost:${port}`)
    );
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

startServer();
