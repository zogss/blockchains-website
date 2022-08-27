import { Router } from "express";
import MainController from "../../app/controllers/MainController";

const router = Router();

//* initial route
router.get("/", (req, res) => {
  res.redirect("/home");
});

//* all routes
router.get("/home", (req, res) => {
  res.render("pages/home");
});

router.get("/about", (req, res) => {
  res.render("pages/about");
});

router.get("/contact", (req, res) => {
  res.render("pages/contact");
});

router.get("/news", (req, res) => {
  res.render("pages/news");
});

//* pratice routes
router.get("/pratice", (req, res) => {
  res.render("pages/pratice");
});

router.get("/pratice/blockchain-advising", (req, res) => {
  res.render("pratice/blockchain-advising");
});

router.get("/pratice/blockchain-litigation", (req, res) => {
  res.render("pratice/blockchain-litigation");
});

router.get("/pratice/fintech-cryptocurrency", (req, res) => {
  res.render("pratice/fintech-cryptocurrency");
});

router.get("/pratice/corporate-governance", (req, res) => {
  res.render("pratice/corporate-governance");
});

router.get("/pratice/intellectual-property", (req, res) => {
  res.render("pratice/intellectual-property");
});

router.get("/pratice/broker-dealer", (req, res) => {
  res.render("pratice/broker-dealer");
});

router.get("/pratice/cybersecurity", (req, res) => {
  res.render("pratice/cybersecurity");
});

router.get("/pratice/fund-formation", (req, res) => {
  res.render("pratice/fund-formation");
});

router.get("/pratice/digital-assets", (req, res) => {
  res.render("pratice/digital-assets");
});

router.get("/pratice/non-fungible", (req, res) => {
  res.render("pratice/non-fungible");
});

//* Wildcard routes
router.get("/*", (req, res) => {
  res.redirect("/");
});

export default router;
