import express from "express";
import web from "../routes/web";
import path from "path";
import api from "../routes/api";
import viewHelpers from "./view-helpers";
import methodOverride from "method-override";
import cookieParser from "cookie-parser";
import { engine } from "express-handlebars";
import Handlebars from "handlebars";
import { allowInsecurePrototypeAccess } from "@handlebars/allow-prototype-access";

class App {
  //* short paths
  viewsPath = path.resolve(__dirname, "..", "..", "resources", "views");
  publicPath = path.resolve(__dirname, "..", "..", "public");

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
    this.app.use(methodOverride("_method"));
    this.app.use(cookieParser());
  }
  routes() {
    //* all routes here
    this.app.use("/api", api);
    this.app.use("/", web);
  }
}

export default new App();
