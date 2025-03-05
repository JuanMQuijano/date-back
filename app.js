import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import dateRouter from "./router/dateRouter.js"
import conectarDB from "./db/connectDb.js";
dotenv.config();

const app = express();
await conectarDB()

app.use(cors("*"))
app.use(express.json())

const PORT = process.env.PORT || 4000

app.use("/api/v1/date", dateRouter)

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})