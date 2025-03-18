import express from "express";
import cors from "cors";
import bodyParser from "body-parser"
import route from "./routes/products.routes";

const app = express();

app.use(
    cors({
        origin : "*",
    })
);

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", route);


export default app