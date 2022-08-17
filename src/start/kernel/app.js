import express from "express";
import api from "../routes/api";

class App {
  constructor() {
    this.app = express();
    this.routes();
  }
  routes() {
    //* all routes here
    this.app.use("/", api);
  }
}

export default new App();
