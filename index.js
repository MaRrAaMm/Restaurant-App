import express from "express";
import bootstrap from "./src/app.controller.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app = express();
bootstrap(app,express);

app.use(express.json());
app.use(cors({origin: process.env.CLIENT_URL ||"*" }));
const PORT = process.env.PORT ||3000;
app.listen(PORT, ()=>{
    console.log("server is running in port",PORT);
});