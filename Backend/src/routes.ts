import express from "express";

import PointsController from "./controllers/PointsController";
import ItemsController from "./controllers/ItemsController";
//upload de imagens
import multerConfig from "./config/multer";
/***** */
//celebrate joi
import celebrate from "./config/celebrate";
/** */
//index,show,create,update,delete

const routes = express.Router();
//multer config
const upload = multerConfig;
//celebrate
const celebration = celebrate;

const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get("/items", itemsController.index);

routes.get("/points", pointsController.index);
routes.get("/points/:id", pointsController.show); //listar um ponto de coleta específico

routes.post(
  "/points",
  upload.single("image"),
  celebration,
  pointsController.create
);

export default routes;

//Service Pattern
//Repository Patten (Data Maper)
