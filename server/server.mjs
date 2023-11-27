import express from "express";
import cors from "cors";

import dotenv from "dotenv";
dotenv.config();

import "express-async-errors";
import recipes from "./routes/recipes.mjs";

const PORT = process.env.PORT || 8000;
const app = express();

app.use(cors());
app.use(express.json());

// Load the /posts routes
app.use("/recipes", recipes);

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Uh oh! An unexpected error occured.")
})

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});