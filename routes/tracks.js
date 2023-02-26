const express = require("express");
const router = express.Router();
const {getItems,getItem,createItems} = require("../controllers/tracks");
router.get("/",getItems)
router.post("/",createItems)

module.exports = router