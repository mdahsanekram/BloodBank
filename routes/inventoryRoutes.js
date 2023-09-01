const express =require("express");
const authMiddleware = require("../middleware/authMiddleware");
const { cerateInventoryCOntroller } = require("../controllers/inventoryController");

const router=express.Router()

router.post('/create-inventory',authMiddleware,cerateInventoryCOntroller)



module.exports=router