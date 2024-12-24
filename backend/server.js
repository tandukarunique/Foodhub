import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config";
import cartRouter from "./routes/cartRoute.js";

//app config
const app = express();
const port = 4000;

//middleware
app.use(express.json());
app.use(cors());

//db connection
const startServer = async () => {
  try {
    await connectDB(); // Wait for DB connection
    console.log("Database connected");
    // Start listening only after DB connection
    app.listen(port, () => {
      console.log(`Server started on http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Failed to connect to the database:", error.message);
    process.exit(1); // Exit process with failure
  }
};

//Api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart",cartRouter)

//Default route
app.get("/", (req, res) => {
  res.send("API Working");
});

startServer();
