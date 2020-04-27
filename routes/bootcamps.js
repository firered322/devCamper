const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("Show all bootcamps");
});
router.post("/", (req, res) => {
  res.status(200).send("Post bootcamps");
});
router.get("/:id", (req, res) => {
  res.status(200).send(`Get the bootcamp w/ id: ${req.params.id}`);
});
router.put("/:id", (req, res) => {
  res.status(200).send(`Update the bootcamp w/ id: ${req.params.id}`);
});
router.delete("/:id", (req, res) => {
  res.status(200).send(`Delete the bootcamp w/ id: ${req.params.id}`);
});

module.exports = router;
