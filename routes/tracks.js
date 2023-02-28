const express = require("express");
const router = express.Router();
const customHeader=require("../middleware/customHeader")
const {validatorcreateItems}=require("../validators/tracks")
const { getItems, getItem,createItems } = require("../controllers/tracks");

router.get("/", getItems);
router.post("/",validatorcreateItems,customHeader,createItems);
module.exports = router;