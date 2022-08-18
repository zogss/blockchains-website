import { Router } from "express";
import MainController from "../../app/controllers/MainController";

const router = Router();

//* initial route
// router.get("/", (req, res) => {
//   res.send("Hello World!");
// });
router.get("/", MainController.index);

//* Wildcard routes
router.get("/*", async (req, res, next) => {
  return res.redirect("/");
});

export default router;
