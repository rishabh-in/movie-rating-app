import express from "express";
import dotenv from 'dotenv';
import connectDB from "./Config/db.js"


// Router imports
import movieRoutes from './Routes/user.routes.js'
import gitRoutes from './Routes/git.routes.js';
import adminRouter from "./Routes/admin.routes.js"
import mediaRouter from './Routes/media.routes.js'



let app = express();
app.use(express.urlencoded({extended: true}))
app.use(express.json())

dotenv.config()
connectDB();

app.use("/api", movieRoutes);
app.use("/api", gitRoutes);
app.use("/api", adminRouter)
app.use("/api", mediaRouter)


app.listen(process.env.PORT, () => {
  console.log("App is running", process.env.PORT)
})


