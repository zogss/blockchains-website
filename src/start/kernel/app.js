import express from "express";
import path from "path";
import api from "../routes/api";
import { engine } from "express-handlebars";
import Handlebars from "handlebars";
import { allowInsecurePrototypeAccess } from "@handlebars/allow-prototype-access";

class App {
  //* short paths
  viewsPath = path.resolve(__dirname, "..", "..", "resources", "views");
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }
  middlewares() {
    //* all middlewares goes here
    this.app.engine(
      "hbs",
      engine({
        extname: ".hbs",
        helpers: viewHelpers,
        handlebars: allowInsecurePrototypeAccess(Handlebars),
      })
    );
    //* set
    this.app.set("view engine", "hbs");
    this.app.set("views", this.viewsPath);
    //* use
    this.app.use("/public", express.static(this.publicPath));
    this.app.use(express.urlencoded({ extended: true }));
  routes() {
    //* all routes here
    this.app.use("/", api);
  }
}

export default new App();
