import express from "express";
import dotenv from 'dotenv';
import movieRoutes from './Routes/user.routes.js'
import gitRoutes from './Routes/git.routes.js';
import connectDB from "./Config/db.js"

let app = express();
app.use(express.json())

dotenv.config()
connectDB();

app.use("/api", movieRoutes);
app.use("/api", gitRoutes);


app.listen(process.env.PORT, () => {
  console.log("App is running", process.env.PORT)
})


