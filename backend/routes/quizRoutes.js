const express=require("express");
const createQuizController=require("../controllers/quizController");
const authMiddleware = require("../middleware/authMiddleware");

const router=express.Router();

router.post('/create',authMiddleware,createQuizController);
// router.post('/questionList', authMiddleware, displayQuestionsController)

module.exports=router;