const express =require("express");
const authMiddleware = require("../middleware/authMiddleware");
const { cerateInventoryCOntroller, getInventoryCOntroller } = require("../controllers/inventoryController");

const router=express.Router()

router.post('/create-inventory',authMiddleware,cerateInventoryCOntroller)
router.get('/get-inventory',authMiddleware,getInventoryCOntroller)



module.exports=router