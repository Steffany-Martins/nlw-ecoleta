import express from "express";
import cors from "cors";
import path from "path";
import routes from "./routes";
//Criando aplicação
import { errors } from "celebrate";
const app = express();

app.use(cors());
app.use(express.json()); // a forma de o express entender como JSON a request
app.use(routes);

app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));
app.use(errors());

app.listen(3333);
