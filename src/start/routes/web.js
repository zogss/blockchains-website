import { Router } from "express";
import MainController from "../../app/controllers/MainController";

const router = Router();

//* initial route
router.get("/", (req, res) => {
  res.redirect("/home");
});

//* all routes
router.get("/home", (req, res) => {
  res.render("pages/home", { title: "BullBlockChain - Home" });
});

router.get("/about", (req, res) => {
  res.render("pages/about", { title: "BullBlockChain - About" });
});

router.get("/contact", (req, res) => {
  res.render("pages/contact", { title: "BullBlockChain - Contact" });
});

router.get("/news", (req, res) => {
  res.render("pages/news", { title: "BullBlockChain - News" });
});

//* pratice routes
router.get("/pratice", (req, res) => {
  res.render("pages/pratice", { title: "BullBlockChain - Pratice" });
});

router.get("/pratice/blockchain-advising", (req, res) => {
  res.render("pratice/blockchain-advising", {
    title: "BullBlockChain - Blockchain Advising",
  });
});

router.get("/pratice/blockchain-litigation", (req, res) => {
  res.render("pratice/blockchain-litigation", {
    title: "BullBlockChain - Blockchain Litigation",
  });
});

router.get("/pratice/fintech-cryptocurrency", (req, res) => {
  res.render("pratice/fintech-cryptocurrency"),
    { title: "BullBlockChain - Fintech Cryptocurrency" };
});

router.get("/pratice/corporate-governance", (req, res) => {
  res.render("pratice/corporate-governance", {
    title: "BullBlockChain - Corporate Governance",
  });
});

router.get("/pratice/intellectual-property", (req, res) => {
  res.render("pratice/intellectual-property", {
    title: "BullBlockChain - Intellectual Property",
  });
});

router.get("/pratice/broker-dealer", (req, res) => {
  res.render("pratice/broker-dealer", {
    title: "BullBlockChain - Broker Dealer",
  });
});

router.get("/pratice/cybersecurity", (req, res) => {
  res.render("pratice/cybersecurity", {
    title: "BullBlockChain - Cybersecurity",
  });
});

router.get("/pratice/fund-formation", (req, res) => {
  res.render("pratice/fund-formation", {
    title: "BullBlockChain - Fund Formation",
  });
});

router.get("/pratice/digital-assets", (req, res) => {
  res.render("pratice/digital-assets", {
    title: "BullBlockChain - Digital Assets",
  });
});

router.get("/pratice/non-fungible", (req, res) => {
  res.render("pratice/non-fungible", {
    title: "BullBlockChain - Non Fungible",
  });
});

//* about routes
router.get("/about/metaverse", (req, res) => {
  res.render("about/metaverse", { title: "BullBlockChain - Metaverse" });
});

router.get("/about/healthtechs", (req, res) => {
  res.render("about/healthtechs", { title: "BullBlockChain - Healthtechs" });
});

router.get("/about/fintech", (req, res) => {
  res.render("about/fintech", { title: "BullBlockChain - Fintech" });
});

router.get("/about/sports", (req, res) => {
  res.render("about/sports", { title: "BullBlockChain - Sports" });
});

router.get("/about/communications-and-media", (req, res) => {
  res.render("about/communications-media", {
    title: "BullBlockChain - Comunications and Media",
  });
});

router.get("/about/environment-and-climate-change", (req, res) => {
  res.render("about/environment-climate-change", {
    title: "BullBlockChain - Environment and Climate Change",
  });
});

router.get("/about/corporate-governance", (req, res) => {
  res.render("about/corporate-governance", {
    title: "BullBlockChain - Corporate Governance",
  });
});

router.get("/about/m&-a", (req, res) => {
  res.render("about/m&a", { title: "BullBlockChain - M&A" });
});

router.get("/about/tokenisation", (req, res) => {
  res.render("about/tokenisation", { title: "BullBlockChain - Tokenisation" });
});

//* Wildcard routes
router.get("/*", (req, res) => {
  res.redirect("/");
});

export default router;
