const express=require("express");
const createNewQuestion = require("../controllers/questionController");
const router=express.Router();

router.post('/create',createNewQuestion);

module.exports=router;