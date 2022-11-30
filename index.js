const express = require("express");
const router = express.Router();
const fs = require("fs");
const {
  create,
  postData,
  read,
  readData,
  update,
  updateData,
  deleteFun,
  deleteFile,
} = require("./controllers/crud");
router.get("/", (req, res) => {
  res.render("index", { title: "Home Page" });
});
router.get("/create", create);
router.get("/read", read);
router.get("/update", update);
router.get("/delete", deleteFun);
router.post("/postdata", postData);
router.post("/readdata", readData);
router.post("/updatedata", updateData);
router.post("/deletefile", deleteFile);
module.exports = router;
